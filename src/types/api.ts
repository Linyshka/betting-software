export type GameTypeID = "vs" | "ar" | "cs" | "lg" | "bj" | "bc" | "sc" | "rl" | "vp";

export type GameItem = {
  gameID: string;
  gameName: string;
  gameTypeID: GameTypeID;
  technology: string;
  platform: string;
  firstSeenAt: Date;
}

export type GameListResponse = {
  result: GameItem[];
  status: number;
  error_message: string;
}