/* ============================================================
   YUDDH — core types for the rules engine.
   The engine has no DOM code: it runs in the browser, in a web
   worker for the AI, and in node for tests and balance runs.
   ============================================================ */

export type EmpireId = 'maurya' | 'gupta' | 'chalukya' | 'chola' | 'rajput' | 'swarajya' | 'adilshahi' | 'jaoli' | 'mughal' | 'neutral';
export type PlayerIndex = 0 | 1;
/** 'ganim' (DESIGN 3.3, strike and fade / ganimi kava): Swarajya rules only. After this unit attacks,
    its owner may pull it back to the Rajya line at no Kosha cost (if there is room) — see the
    'fallback' Action and canFallback() in rules.ts. */
export type Keyword = 'veg' | 'raksha' | 'dhuan' | 'ganim';
export type CardType = 'unit' | 'order' | 'yantra' | 'gad';
/** DESIGN 3.1: the standing benefit a Gad gives the side that holds it, while it stands.
    'none' = no standing benefit (a bare fort, e.g. an enemy-held Torna waiting to be taken).
    durgWard is wired (session 13, Chakan); shipsAtk is recorded for later chapters (Sindhudurg, Khanderi)
    and is not yet applied by the engine. */
export type GadEffect = 'kosha1' | 'drawEvery2' | 'rakshaHp' | 'durgWard' | 'shipsAtk' | 'none';
export type Range = 'melee' | 'ranged';
export type AiLevel = 'easy' | 'normal' | 'hard' | 'search';
export type Line = 'support' | 'front';
export type DeployEffect = 'draw1' | 'drawKosha' | 'kosha1' | 'buffLine' | 'buffAll' | 'kosha2' | 'setYantra' | 'hillVolley' | 'elephantBuff' | 'drawHeal';
export type YantraTrigger = 'onEnemyDeploy' | 'onHQAttack' | 'onUnitAttack' | 'onEnemyAdvance';
export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Empire {
  id: EmpireId;
  name: string;
  capital: string;
  color: string;
  glyph: string;
  passive: string;
}

export interface CardDef {
  id: string;
  name: string;
  sub: string;
  empire: EmpireId;
  type: CardType;
  /** 'shakti' marks power orders; 'yantra' marks face-down traps */
  kind?: 'shakti' | 'yantra';
  cost: number;
  op?: number;
  atk?: number;
  hp?: number;
  range?: Range;
  kw?: Keyword[];
  glyph: string;
  text: string;
  deploy?: DeployEffect;
  /** 'enemyGad' (Swarajya): an order aimed only at an enemy fort, e.g. the Surang */
  target?: 'enemyUnit' | 'enemyGad';
  trigger?: YantraTrigger;
  power?: number;
  /** Swarajya: damage instead of `power` when the target is a Legendary unit (the Wagh Nakh) */
  powerVsLegendary?: number;
  /** data-driven order effects (cards.json): damage to the enemy Durg, cards drawn, Dharma steps */
  hqDamage?: number;
  draw?: number;
  heal?: number;
  kosha?: number;
  /** damage to every enemy unit (orders) */
  damageAll?: number;
  /** damage to every enemy unit on the Yudhbhumi */
  damageFront?: number;
  /** +attack for all your units */
  buffAtk?: number;
  dharma?: number;
  /** Pikes: a melee unit that advanced this turn and strikes this unit takes this much damage (Yuddh rules) */
  reprisal?: number;
  /** Elephant-slayers: extra damage when this unit strikes a War Elephant (Yuddh rules) */
  vsElephant?: number;
  rarity?: Rarity;
  /** Swarajya: siege guns. Cannot leave the Rajya line (no move to the Yudhbhumi) */
  static?: boolean;
  /** Swarajya: extra damage when this unit strikes a Gad; such a unit may also bombard an enemy Gad
      from its own Rajya line, over the heads of any Raksha (the Imperial Topkhana) */
  vsGad?: number;
  /** Swarajya aura: while this unit stands on its owner's Rajya line, each blow on that owner's
      Gads is this much weaker (Firangoji Narsala) */
  gadWard?: number;
  /** Swarajya rules, type 'gad' only: the standing benefit this fort gives while it stands */
  gad?: GadEffect;
}

export interface Unit {
  uid: number;
  cardId: string;
  name: string;
  sub: string;
  glyph: string;
  empire: EmpireId;
  atk: number;
  hp: number;
  maxHp: number;
  op: number;
  range: Range;
  kw: Keyword[];
  owner: PlayerIndex;
  canAct: boolean;
  moved: boolean;
  attacked: boolean;
  smokeBroken: boolean;
  upgraded?: number;
  /** Yuddh rules: the turn a Garuda Vyuha let this unit charge */
  surge?: number;
  /** Yuddh rules: battle honours won by destroying enemy units (0–2): Veer +1 health, Mahaveer also +1 attack */
  rank?: number;
  /** Yuddh rules, morale: 1 = just broke and fled (loses its next turn), 2 = resting this turn, rallies at the start of the next */
  routed?: 1 | 2;
}

export interface SetYantra { cardId: string; uid: number }

export interface Player {
  side: 'p0' | 'p1';
  empire: EmpireId;
  ally: EmpireId;
  faction: string;
  hq: { name: string; hp: number; maxHp: number };
  kosha: number;
  maxKosha: number;
  deck: string[];
  hand: string[];
  discard: string[];
  support: Unit[];
  yantras: SetYantra[];
  fatigue: number;
  upgrades: Record<string, number>;
  drawBonus: number;
  counters: { ordersPlayed: number; unitsThisTurn: number; mantraThisTurn?: boolean };
  /** Yuddh rules: the Dharma–Kuta meter, −3 (Kuta, cunning) to +3 (Dharma, honour); 0 if unset */
  dharma?: number;
}

export type Objective =
  | { type: 'destroy'; turns?: number }
  | { type: 'survive'; turns: number }
  | { type: 'deadline'; turns: number }
  /** DESIGN 3.6: take the listed Gad(s) (by cardId) away from whoever starts holding them.
      Checked after every capture, and (if `turns` is set) as a deadline at the start of a round,
      the same way `survive`/`deadline` are. */
  | { type: 'capture'; forts: string[]; turns?: number };

export type WinReason = 'destroy' | 'both' | 'survive' | 'deadline' | 'capture' | null;

export interface LogEntry { turn: number; msg: string; side: number }

export type GameEvent =
  | { t: 'deploy'; owner: PlayerIndex; uid: number; cardId: string }
  | { t: 'move'; owner: PlayerIndex; uid: number }
  | { t: 'attack'; owner: PlayerIndex; uid: number; target: { owner: PlayerIndex; uid: number }; dmg: number }
  | { t: 'death'; owner: PlayerIndex; uid: number }
  | { t: 'hq'; owner: PlayerIndex; dmg: number; attacker: PlayerIndex; uid: number }
  | { t: 'order'; owner: PlayerIndex; cardId: string }
  | { t: 'yantra'; owner: PlayerIndex; cardId: string }
  | { t: 'yantraSet'; owner: PlayerIndex }
  | { t: 'promote'; owner: PlayerIndex; uid: number; rank: number }
  | { t: 'trample'; owner: PlayerIndex; uid: number; dmg: number }
  | { t: 'heal'; owner: PlayerIndex; uid: number; amount: number; by: number }
  | { t: 'rout'; owner: PlayerIndex; uid: number; fled: boolean }
  | { t: 'rally'; owner: PlayerIndex; uid: number }
  /** DESIGN 3.1: a Gad is beaten down but does not fall — it flips to the attacker's side */
  | { t: 'capture'; owner: PlayerIndex; uid: number; cardId: string; from: PlayerIndex }
  /** DESIGN 3.3: a Ganim unit strikes and fades back to the Rajya line after attacking */
  | { t: 'fallback'; owner: PlayerIndex; uid: number }
  | { t: 'dharma'; owner: PlayerIndex; value: number; delta: number; why: string }
  | { t: 'attrition'; owner: PlayerIndex; dmg: number; fatigue: number };

export interface GameState {
  seed: number;
  turn: number;
  active: PlayerIndex;
  over: boolean;
  winner: PlayerIndex | null;
  winReason: WinReason;
  log: LogEntry[];
  nextUid: number;
  events: GameEvent[];
  front: { owner: PlayerIndex | null; units: Unit[] };
  players: [Player, Player];
  aiLevel: AiLevel;
  objective: Objective;
  scenarioId: string | null;
  scenarioName: string | null;
  rules?: Ruleset;
  season?: Season;
  /** DESIGN 3.2 Khind (Swarajya rules only): how many units the Yudhbhumi holds; unset = 4 */
  frontSize?: number;
  rng: () => number;
}

export type Target =
  | { kind: 'hq'; owner: PlayerIndex }
  | { kind: 'unit'; owner: PlayerIndex; uid: number };

export type Action =
  | { type: 'play'; handIndex: number; target?: Target | null }
  | { type: 'move'; uid: number }
  | { type: 'attack'; uid: number; target: Target }
  /** DESIGN 3.3, Ganim only: fall back from the Yudhbhumi to the Rajya line at no Kosha cost. */
  | { type: 'fallback'; uid: number }
  | { type: 'end' };

export type Check = { ok: true } | { ok: false; reason: string };

export interface SideConfig {
  empire: EmpireId;
  ally?: EmpireId;
  deck?: string[];
  hq?: number;
  faction?: string;
  capital?: string;
  startKosha?: number;
  drawBonus?: number;
  upgrades?: Record<string, number>;
  handSize?: number;
  openingHand?: string[];
}

export interface Preset {
  enemyFront?: string[];
  playerFront?: string[];
  enemySupport?: string[];
  playerSupport?: string[];
  /** DESIGN 3.5 (Bhet): wound a side's commander at creation — a fraction of max health taken
      off its preset front unit, or off its own Durg if it has none placed. Never below 1 hp. */
  enemyWoundFrac?: number;
  playerWoundFrac?: number;
}

export interface NewGameOptions {
  seed?: number;
  player: SideConfig;
  enemy: SideConfig;
  preset?: Preset;
  aiLevel?: AiLevel;
  objective?: Objective;
  scenarioId?: string | null;
  scenarioName?: string | null;
  /** 'classic' = the prototype's rules (golden traces); 'yuddh' = Raksha guards the Durg,
      and a unit either moves or attacks in a turn unless it is mounted (see canCharge);
      'swarajya' = everything in 'yuddh' plus the Swarajya mechanics (see isYuddhRules) */
  rules?: Ruleset;
  season?: Season;
  /** DESIGN 3.2 Khind: a mountain pass, where the Yudhbhumi holds only this many units (Swarajya rules only; default 4) */
  frontSize?: number;
}
export type Ruleset = 'classic' | 'yuddh' | 'swarajya';
/** Ritu, the season a battle is fought in (Yuddh rules) */
export type Season = 'sharad' | 'varsha' | 'grishma' | 'hemanta';
