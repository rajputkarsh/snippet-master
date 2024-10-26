export default interface IShare {
  id: string;
  shareId: string;
  ownerId: string;
  viewedBy: Array<string>;
}