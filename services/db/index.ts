export class DB {
  private static instance: any;

  static async getInstance(): Promise<any> {
    if (!DB.instance) {
      DB.instance = await Deno.openKv();
    }
    return DB.instance;
  }
}
