export class Review {
    constructor(
        public id: number,
        public productId: number,
        public timestamp: Date | number,
        public user: string,
        public rating: number,
        public comment: string) {
    }
}
