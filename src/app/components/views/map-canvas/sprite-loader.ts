import { Assets, Sprite, Texture } from "pixi.js";
import { GifSource, GifSprite } from "pixi.js/gif";

/** Static functions for loading sprite resources */
export abstract class SpriteLoader {

  public static async getExternalSprite(alias: string, assetUrl: string) : Promise<Sprite | undefined> {
    const img: Texture = await this.loadExternalTextureAsset(alias, assetUrl);
    if(img === undefined) return undefined;

    return new Sprite(img);
  }

  public static async getExternalGifSprite(alias: string, assetUrl: string) : Promise<GifSprite | undefined> {
    const gif: GifSource = await this.loadExternalGifAsset(alias, assetUrl);
    if(gif === undefined) return undefined;

    return new GifSprite(gif);
  }

  private static async loadExternalTextureAsset(alias: string, assetUrl: string) : Promise<Texture> {
    return Assets.load<Texture>({
      alias: alias,
      src: assetUrl,
      parser: 'loadTextures'
    });
  }

  private static async loadExternalGifAsset(alias: string, assetUrl: string) : Promise<GifSource> {
    return Assets.load<GifSource>({
      alias: alias,
      src: assetUrl
    });
  }
}