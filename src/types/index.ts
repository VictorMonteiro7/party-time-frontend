export type PartyTypes = {
  _id: string;
  title: string;
  description: string;
  date: string;
  privacy?: boolean;
  userId: string;
  photos: string[];
};

export type PartyUserTypes = {
  parties: PartyTypes[];
  privateParties?: PartyTypes[];
};
