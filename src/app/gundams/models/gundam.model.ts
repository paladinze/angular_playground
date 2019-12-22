export class Gundam {
  public name: string;
  public series: string;
  public hasReactor: boolean;
  public img: string;

  constructor(name: string, series: string, hasReactor: boolean, img: string) {
    this.name = name;
    this.series = series;
    this.hasReactor = hasReactor;
    this.img = img;
  }
}