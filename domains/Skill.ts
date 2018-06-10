import { Category, Style } from '~/domains/constants';

interface Skill {
  id    :number,
  name  :string;
  description :string;
}

export class Ability implements Skill {
  id :number;
  name :string;
  description :string;
  constructor(id :number, name: string, description :string){
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

export class Weapon implements Skill {
  id :number;
  name: string;
  description: string;
  thumbnail: string;
  category: Category
  style :Style
  constructor(id :number, name: string, description: string, thumbnail :string, category :Category, style :Style) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.category = category;
    this.style = style;
  }
}

export class Special implements Skill {
  id :number;
  name: string;
  description: string;
  thumbnail :string;
  constructor(id :number, name: string, description: string, thumbnail :string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
  }
}