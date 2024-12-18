export interface ISocial {
  name: string,
  icon: string,
  url: string,
  classAttribute: string
}

export interface IHeaderLink {
  href: string,
  title: string,
}

export interface ITechnology {
  icon: string,
}

export interface IService {
  imgSrcWhite: string,
  imgSrcBlack: string,
  title: string,
  text: string
}

export interface IExperience {
  imageSrc: string,
  dateFrom: string,
  dateTill: string,
  title: string,
  description: string,
  classAttribute: string
}

export interface IContactBox {
  title: string,
  icon: string,
  text: string,
}