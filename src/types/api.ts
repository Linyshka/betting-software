export type GameTypeID = "vs" | "ar" | "cs" | "lg" | "bj" | "bc" | "sc" | "rl" | "vp"

export type GameItem = {
  gameID: string;
  gameName: string,
  gameTypeID: GameTypeID,
  technology: string,
  platform: string,
  firstSeenAt: Date
}