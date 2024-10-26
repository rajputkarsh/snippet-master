export default interface IShare {
  id: string;
  shareId: string;
  ownerId: string;
  validTill: string;
  viewedBy: Array<string>;
}