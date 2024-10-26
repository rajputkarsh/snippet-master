export default interface IShare {
  id: string;
  shareId: string;
  ownerId: string;
  validTill: Date;
  viewedBy: Array<string>;
}