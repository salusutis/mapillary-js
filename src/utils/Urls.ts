export class Urls {
    public static image(key: string, size: number): string {
        return `https://d1cuyjsrcm0gby.cloudfront.net/${key}/thumb-${size}.jpg?origin=mapillary.webgl`;
    }

    public static mesh(key: string): string {
        return `https://d1cuyjsrcm0gby.cloudfront.net/${key}/sfm/v1.0/atomic_mesh.json`;
    }

    public static proto_mesh(key: string): string {
        return `http://127.0.0.1:5000/mesh/${key}`;
    }
}

export default Urls;
