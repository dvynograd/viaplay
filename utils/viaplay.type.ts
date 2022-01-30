export interface ViaplayResponse {
  type: string;
  pageType: string;
  sectionId: string;
  title: string;
  description: string;
  styles: string[];
  _links: Links;
  _embedded: Embedded;
  responseCode: ResponseCode;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Self {
  href: string;
}

export interface ViaplayRoot {
  id: string;
  title: string;
  href: string;
}

export interface ViaplayEditorial {
  id: string;
  href: string;
}

export interface ViaplaySearch {
  title: string;
  href: string;
  templated: boolean;
}

export interface ViaplayAutocomplete {
  title: string;
  href: string;
  templated: boolean;
}

export interface ViaplayByGuid {
  title: string;
  href: string;
  templated: boolean;
}

export interface ViaplaySearchSuggestions {
  title: string;
  href: string;
  templated: boolean;
}

export interface ViaplayValidateSession {
  id: string;
  href: string;
  templated: boolean;
}

export interface ViaplayTranslations {
  id: string;
  href: string;
  templated: boolean;
}

export interface ViaplayTechnotifier {
  id: string;
  href: string;
}

export interface ViaplaySection {
  id: string;
  title: string;
  href: string;
  type: string;
  name: string;
  active?: boolean;
}

export interface ViaplayGeolocation {
  href: string;
}

export interface ViaplayRetrieveUserInformation {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayLocalizationLanguages {
  id: string;
  href: string;
  method: string;
}

export interface ViaplayLocalizationCountry {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayUserJourneyGetJourney {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayLogin {
  title: string;
  href: string;
  templated: boolean;
}

export interface ViaplayTokenLogin {
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayTokenRefresh {
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplaySetParentalControl {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayUserPwdUpdate {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayUserPwdLoginRequest {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayPasswordToken {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayResetPassword {
  id: string;
  href: string;
  method: string;
}

export interface ViaplayRetrieveUserEmail {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayUniversalLinkResolver {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayUserExperiments {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayTracking {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface ViaplayMultiPartial {
  id: string;
  href: string;
  method: string;
  templated: boolean;
}

export interface Links {
  curies: Cury[];
  self: Self;
  "viaplay:root": ViaplayRoot;
  "viaplay:editorial": ViaplayEditorial;
  "viaplay:search": ViaplaySearch;
  "viaplay:autocomplete": ViaplayAutocomplete;
  "viaplay:byGuid": ViaplayByGuid;
  "viaplay:searchSuggestions": ViaplaySearchSuggestions;
  "viaplay:validateSession": ViaplayValidateSession;
  "viaplay:translations": ViaplayTranslations;
  "viaplay:technotifier": ViaplayTechnotifier;
  "viaplay:sections": ViaplaySection[];
  "viaplay:geolocation": ViaplayGeolocation;
  "viaplay:retrieveUserInformation": ViaplayRetrieveUserInformation;
  "viaplay:localizationLanguages": ViaplayLocalizationLanguages;
  "viaplay:localizationCountry": ViaplayLocalizationCountry;
  "viaplay:userJourneyGetJourney": ViaplayUserJourneyGetJourney;
  "viaplay:login": ViaplayLogin;
  "viaplay:tokenLogin": ViaplayTokenLogin;
  "viaplay:tokenRefresh": ViaplayTokenRefresh;
  "viaplay:setParentalControl": ViaplaySetParentalControl;
  "viaplay:userPwdUpdate": ViaplayUserPwdUpdate;
  "viaplay:userPwdLoginRequest": ViaplayUserPwdLoginRequest;
  "viaplay:passwordToken": ViaplayPasswordToken;
  "viaplay:resetPassword": ViaplayResetPassword;
  "viaplay:retrieveUserEmail": ViaplayRetrieveUserEmail;
  "viaplay:universalLinkResolver": ViaplayUniversalLinkResolver;
  "viaplay:userExperiments": ViaplayUserExperiments;
  "viaplay:tracking": ViaplayTracking;
  "viaplay:multiPartial": ViaplayMultiPartial;
}

export interface Client {
  module: string;
  template: string;
}

export interface Duration {
  milliseconds: number;
  readable: string;
}

export interface Boxart {
  url: string;
  template: string;
}

export interface Landscape {
  url: string;
  template: string;
}

export interface Packshot {
  url: string;
  template: string;
}

export interface Hero169 {
  template: string;
}

export interface Coverart23 {
  template: string;
}

export interface Coverart169 {
  template: string;
}

export interface Images {
  boxart: Boxart;
  landscape: Landscape;
  packshot: Packshot;
  hero169: Hero169;
  coverart23: Coverart23;
  coverart169: Coverart169;
}

export interface PromoVideo169 {
  href: string;
}

export interface PromoVideo34 {
  href: string;
}

export interface PromoVideos {
  promoVideo169: PromoVideo169;
  promoVideo34: PromoVideo34;
}

export interface Audio {
  languageCode: string;
  default: boolean;
}

export interface Language {
  audio: Audio[];
}

export interface Person {
  name: string;
  groups: string[];
  personId: string;
}

export interface People {
  actors: string[];
  directors: string[];
  participants: string[];
  people: Person[];
}

export interface Production {
  country: string;
  year: number;
}

export interface Imdb {
  id: string;
  rating: string;
  votes: string;
  url: string;
}

export interface Content {
  duration: Duration;
  images: Images;
  promoVideos: PromoVideos;
  language: Language;
  parentalRating: string;
  people: People;
  production: Production;
  imdb: Imdb;
  synopsis: string;
  title: string;
}

export interface User {
  starred: boolean;
  entitled: boolean;
  rented: boolean;
}

export interface PlanInfo {
  isRental: boolean;
  isPurchase: boolean;
}

export interface PlanInfo2 {
  isRental: boolean;
  isPurchase: boolean;
}

export interface Svod {
  start: Date;
  end: Date;
  planInfo: PlanInfo2;
}

export interface PlanInfo3 {
  isRental: boolean;
  isPurchase: boolean;
  price: string;
  mpxProductId: string;
  pricingTemplateId: string;
  subscriptionPeriodSeconds: number;
}

export interface Tvod {
  start: Date;
  end: Date;
  planInfo: PlanInfo3;
}

export interface PlanInfo4 {
  isRental: boolean;
  isPurchase: boolean;
  price: string;
  mpxProductId: string;
  pricingTemplateId: string;
}

export interface Est {
  start: Date;
  end: Date;
  planInfo: PlanInfo4;
}

export interface PlanInfo5 {
  isRental: boolean;
  isPurchase: boolean;
  price: number;
}

export interface EstPlayback {
  start: Date;
  end: Date;
  planInfo: PlanInfo5;
}

export interface Availability {
  start: Date;
  end: Date;
  planInfo: PlanInfo;
  svod: Svod;
  tvod: Tvod;
  est: Est;
  estPlayback: EstPlayback;
}

export interface System {
  availability: Availability;
  flags: string[];
  guid: string;
  productKey: string;
  isKids: boolean;
}

export interface Self2 {
  title: string;
  href: string;
}

export interface ViaplayPage {
  title: string;
  href: string;
}

export interface ViaplayTemplatedPage {
  title: string;
  href: string;
}

export interface ViaplayGenre {
  title: string;
  tagId: string;
  href: string;
}

export interface ViaplayStream {
  href: string;
  templated: boolean;
}

export interface ViaplayTemplatedStream {
  href: string;
  templated: boolean;
}

export interface ViaplayTrailerStream {
  href: string;
  templated: boolean;
}

export interface ViaplayTrailerSelf {
  href: string;
}

export interface ViaplayPeopleSearch {
  href: string;
  templated: boolean;
}

export interface ViaplayPeoplePage {
  href: string;
  templated: boolean;
}

export interface Links2 {
  self: Self2;
  "viaplay:page": ViaplayPage;
  "viaplay:templatedPage": ViaplayTemplatedPage;
  "viaplay:genres": ViaplayGenre[];
  "viaplay:stream": ViaplayStream;
  "viaplay:templatedStream": ViaplayTemplatedStream;
  "viaplay:trailerStream": ViaplayTrailerStream;
  "viaplay:trailerSelf": ViaplayTrailerSelf;
  "viaplay:peopleSearch": ViaplayPeopleSearch;
  "viaplay:peoplePage": ViaplayPeoplePage;
}

export interface Cury2 {
  name: string;
  href: string;
  templated: boolean;
}

export interface ViaplayAccountPurchasePackage {
  href: string;
  templated: boolean;
  redirect: boolean;
}

export interface Links3 {
  curies: Cury2[];
  "viaplay:accountPurchasePackage": ViaplayAccountPurchasePackage;
}

export interface Notice {
  message: string;
  code: number;
  _links: Links3;
}

export interface ViaplayProduct {
  type: string;
  publicPath: string;
  content: Content;
  user: User;
  system: System;
  _links: Links2;
  notice: Notice;
}

export interface Duration2 {
  milliseconds: number;
  readable: string;
}

export interface Boxart2 {
  url: string;
  template: string;
}

export interface Landscape2 {
  url: string;
  template: string;
}

export interface Packshot2 {
  url: string;
  template: string;
}

export interface Hero1692 {
  template: string;
}

export interface Coverart232 {
  template: string;
}

export interface Coverart1692 {
  template: string;
}

export interface Coverart11 {
  template: string;
}

export interface Images2 {
  boxart: Boxart2;
  landscape: Landscape2;
  packshot: Packshot2;
  hero169: Hero1692;
  coverart23: Coverart232;
  coverart169: Coverart1692;
  coverart11: Coverart11;
}

export interface Production2 {
  country: string;
  year: number;
}

export interface Audio2 {
  languageCode: string;
  default: boolean;
}

export interface Language2 {
  audio: Audio2[];
}

export interface Person2 {
  name: string;
  groups: string[];
  personId: string;
}

export interface People2 {
  actors: string[];
  directors: string[];
  participants: string[];
  people: Person2[];
}

export interface Imdb2 {
  id: string;
  rating: string;
  votes: string;
  url: string;
}

export interface Svod2 {
  start: Date;
  end: Date;
}

export interface Availability2 {
  svod: Svod2;
}

export interface Season {
  title: string;
  availability: Availability2;
}

export interface Series {
  title: string;
  synopsis: string;
  season: Season;
  seasons: number;
  seriesGuid: string;
}

export interface Content2 {
  duration: Duration2;
  images: Images2;
  production: Production2;
  parentalRating: string;
  synopsis: string;
  title: string;
  language: Language2;
  people: People2;
  imdb: Imdb2;
  series: Series;
}

export interface User2 {
  starred: boolean;
  entitled?: boolean;
  rented?: boolean;
}

export interface PlanInfo6 {
  isRental: boolean;
  isPurchase: boolean;
}

export interface PlanInfo7 {
  isRental: boolean;
  isPurchase: boolean;
}

export interface Free {
  start: Date;
  end: Date;
  planInfo: PlanInfo7;
}

export interface PlanInfo8 {
  isRental: boolean;
  isPurchase: boolean;
}

export interface Svod3 {
  start: Date;
  end: Date;
  planInfo: PlanInfo8;
}

export interface PlanInfo9 {
  isRental: boolean;
  isPurchase: boolean;
  price: string;
  mpxProductId: string;
  pricingTemplateId: string;
}

export interface Est2 {
  start: Date;
  end: Date;
  planInfo: PlanInfo9;
}

export interface PlanInfo10 {
  isRental: boolean;
  isPurchase: boolean;
  price: number;
}

export interface EstPlayback2 {
  start: Date;
  end: Date;
  planInfo: PlanInfo10;
}

export interface PlanInfo11 {
  isRental: boolean;
  isPurchase: boolean;
  price: string;
  mpxProductId: string;
  pricingTemplateId: string;
  subscriptionPeriodSeconds: number;
}

export interface Tvod2 {
  start: Date;
  end: Date;
  planInfo: PlanInfo11;
}

export interface Availability3 {
  start: Date;
  end: Date;
  planInfo: PlanInfo6;
  free: Free;
  svod: Svod3;
  est: Est2;
  estPlayback: EstPlayback2;
  tvod: Tvod2;
}

export interface System2 {
  availability: Availability3;
  flags: string[];
  guid: string;
  productKey: string;
  isKids: boolean;
}

export interface ViaplayGenre2 {
  title: string;
  tagId: string;
  href: string;
}

export interface ViaplayStream2 {
  href: string;
  templated: boolean;
  title: string;
}

export interface ViaplayTemplatedStream2 {
  href: string;
  templated: boolean;
  title: string;
}

export interface Self3 {
  title: string;
  href: string;
}

export interface ViaplayPage2 {
  title: string;
  href: string;
}

export interface ViaplayTemplatedPage2 {
  title: string;
  href: string;
}

export interface ViaplayPeopleSearch2 {
  href: string;
  templated: boolean;
}

export interface ViaplayPeoplePage2 {
  href: string;
  templated: boolean;
}

export interface ViaplayTrailerStream2 {
  href: string;
  templated: boolean;
}

export interface ViaplayTrailerSelf2 {
  href: string;
}

export interface Links4 {
  "viaplay:genres": ViaplayGenre2[];
  "viaplay:stream": ViaplayStream2;
  "viaplay:templatedStream": ViaplayTemplatedStream2;
  self: Self3;
  "viaplay:page": ViaplayPage2;
  "viaplay:templatedPage": ViaplayTemplatedPage2;
  "viaplay:peopleSearch": ViaplayPeopleSearch2;
  "viaplay:peoplePage": ViaplayPeoplePage2;
  "viaplay:trailerStream": ViaplayTrailerStream2;
  "viaplay:trailerSelf": ViaplayTrailerSelf2;
}

export interface Cury3 {
  name: string;
  href: string;
  templated: boolean;
}

export interface ViaplayAccountPurchasePackage2 {
  href: string;
  templated: boolean;
  redirect: boolean;
}

export interface Links5 {
  curies: Cury3[];
  "viaplay:accountPurchasePackage": ViaplayAccountPurchasePackage2;
}

export interface Notice2 {
  message: string;
  code: number;
  _links: Links5;
}

export interface Trailer {
  guid: string;
  relatedContentType: string;
  relatedContentGuid: string;
  trailerType: string;
  relatedProgramGuid: string;
}

export interface ViaplayProduct2 {
  type: string;
  content: Content2;
  user: User2;
  system: System2;
  _links: Links4;
  notice: Notice2;
  trailer: Trailer;
  publicPath: string;
}

export interface ViaplayPeoplePage3 {
  href: string;
}

export interface Headshot {
  url: string;
  template: string;
}

export interface Images3 {
  headshot: Headshot;
}

export interface Person3 {
  personId: string;
  name: string;
  "viaplay:peoplePage": ViaplayPeoplePage3;
  groups: string[];
  type: string;
  images: Images3;
  firstName: string;
  lastName: string;
  birthDate: string;
  characterName: string;
}

export interface Embedded2 {
  "viaplay:product": ViaplayProduct;
  "viaplay:products": ViaplayProduct2[];
  people: Person3[];
}

export interface Self4 {
  href: string;
}

export interface Links6 {
  self: Self4;
}

export interface ViaplayBlock {
  client: Client;
  totalProductCount: number;
  type: string;
  styles: string[];
  _embedded: Embedded2;
  ablocator: string;
  id: string;
  title: string;
  currentPage?: number;
  pageCount?: number;
  productsPerPage?: number;
  _links: Links6;
}

export interface Embedded {
  "viaplay:blocks": ViaplayBlock[];
}

export interface ResponseCode {
  httpStatus: number;
  statusCode: number;
  code: number;
}
