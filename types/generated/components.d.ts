import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blocks';
  info: {
    description: '';
    displayName: 'block';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    email: Schema.Attribute.Email;
    isTrue: Schema.Attribute.Boolean;
    json: Schema.Attribute.JSON;
    long_text: Schema.Attribute.Text;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    number: Schema.Attribute.Decimal;
    text: Schema.Attribute.String;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    href: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_link: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    showOnPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksLink extends Struct.ComponentSchema {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['web', 'native-app', 'github']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'web'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksPrice extends Struct.ComponentSchema {
  collectionName: 'components_blocks_prices';
  info: {
    description: '';
    displayName: 'price';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    discounted_amount: Schema.Attribute.Decimal;
    isDiscounted: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface BlocksProjectItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_project_items';
  info: {
    displayName: 'project item';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'business.contact', true>;
    name: Schema.Attribute.String;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    progress: Schema.Attribute.Enumeration<
      ['todo', 'inprogress', 'halfway', 'almost', 'done']
    >;
    showOnPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksSectionTitle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_titles';
  info: {
    description: '';
    displayName: 'section title';
  };
  attributes: {
    bg: Schema.Attribute.Enumeration<['dark', 'light', 'other']>;
    cta_link: Schema.Attribute.String;
    cta_slogan: Schema.Attribute.String;
    cta_title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hasDivider: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    section_img: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BusinessContact extends Struct.ComponentSchema {
  collectionName: 'components_business_contacts';
  info: {
    description: '';
    displayName: 'contact';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    title: Schema.Attribute.String;
  };
}

export interface BusinessEndryItem extends Struct.ComponentSchema {
  collectionName: 'components_business_endry_items';
  info: {
    displayName: 'endry-item';
  };
  attributes: {
    discounted_price: Schema.Attribute.Decimal;
    info: Schema.Attribute.String;
    isDiscount: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price: Schema.Attribute.Decimal;
    quantity: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
    unit: Schema.Attribute.Enumeration<['mq', 'pz', 'mc']>;
  };
}

export interface BusinessGoogleMapLocation extends Struct.ComponentSchema {
  collectionName: 'components_business_google_map_locations';
  info: {
    displayName: 'google_map_location';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iframe_string: Schema.Attribute.Text;
    isAvailable: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface BusinessHero extends Struct.ComponentSchema {
  collectionName: 'components_business_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'>;
    section: Schema.Attribute.Component<'blocks.section-title', false>;
    showOnPage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BusinessMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_business_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'al_forne',
        'bread',
        'chicken_dishes',
        'drinks',
        'other',
        'pasta',
        'pesce',
        'pizza',
        'rissotto',
        'sauces',
        'side_orders',
        'starters',
        'steaks',
        'sweets',
      ]
    >;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    ingredients: Schema.Attribute.String;
    isAvailable: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    isFeatured: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    price: Schema.Attribute.Component<'blocks.price', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    showOnCard: Schema.Attribute.Boolean;
    showOnLinkTree: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface BusinessOferta extends Struct.ComponentSchema {
  collectionName: 'components_business_ofertas';
  info: {
    description: '';
    displayName: 'oferta';
  };
  attributes: {
    description: Schema.Attribute.Text;
    showOnPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    umrah_trips: Schema.Attribute.Relation<
      'oneToMany',
      'api::umrah-trip.umrah-trip'
    >;
  };
}

export interface BusinessOpenHours extends Struct.ComponentSchema {
  collectionName: 'components_business_open_hours';
  info: {
    displayName: 'open hours';
  };
  attributes: {
    autumn: Schema.Attribute.String;
    default: Schema.Attribute.String;
    spring: Schema.Attribute.String;
    summer: Schema.Attribute.String;
    winter: Schema.Attribute.String;
  };
}

export interface BusinessServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_business_service_items';
  info: {
    description: '';
    displayName: 'service_item';
  };
  attributes: {
    action_link: Schema.Attribute.String;
    badge: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    showOnCard: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface BusinessServiceLight extends Struct.ComponentSchema {
  collectionName: 'components_business_service_lights';
  info: {
    description: '';
    displayName: 'service-light';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    description: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['umrah', 'visa', 'translate', 'kurban']
    >;
  };
}

export interface BusinessStatistics extends Struct.ComponentSchema {
  collectionName: 'components_business_statistics';
  info: {
    displayName: 'statistics';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    numeric_value: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface BusinessTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_business_testimonial_items';
  info: {
    description: '';
    displayName: 'testimonial_item';
  };
  attributes: {
    author: Schema.Attribute.String;
    author_avatar: Schema.Attribute.Media<'images'>;
    author_link: Schema.Attribute.String;
    comment: Schema.Attribute.String;
    comment_link: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<10>;
    showOnPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface CwkJobExperience extends Struct.ComponentSchema {
  collectionName: 'components_cwk_job_experiences';
  info: {
    description: '';
    displayName: 'job_experience';
  };
  attributes: {
    color_hashtag: Schema.Attribute.String;
    company: Schema.Attribute.String;
    company_link: Schema.Attribute.String;
    description: Schema.Attribute.String;
    end_date: Schema.Attribute.Date;
    icon: Schema.Attribute.String;
    isCurrent: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    position: Schema.Attribute.String;
    started_date: Schema.Attribute.Date;
    techs_used: Schema.Attribute.String;
  };
}

export interface IdrizUmrahBlockInfo extends Struct.ComponentSchema {
  collectionName: 'components_idriz_umrah_block_infos';
  info: {
    displayName: 'info';
  };
  attributes: {};
}

export interface IdrizUmrahBlockRamadan extends Struct.ComponentSchema {
  collectionName: 'components_idriz_umrah_block_ramadans';
  info: {
    description: '';
    displayName: 'ramadan';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    ramadan_year: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2024;
        },
        number
      > &
      Schema.Attribute.DefaultTo<2024>;
    showNotification: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    slogan: Schema.Attribute.String;
    umrah_trips: Schema.Attribute.Relation<
      'oneToMany',
      'api::umrah-trip.umrah-trip'
    >;
  };
}

export interface IdrizUmrahBlockSocialPost extends Struct.ComponentSchema {
  collectionName: 'components_idriz_umrah_block_social_posts';
  info: {
    displayName: 'socialPost';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    gallery: Schema.Attribute.Media<'images' | 'videos', true>;
    link: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['instagram', 'tik-tok', 'facebook', 'linkedin', 'web']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'facebook'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface IdrizUmrahBlockUmrahPrice extends Struct.ComponentSchema {
  collectionName: 'components_idriz_umrah_block_umrah_prices';
  info: {
    description: '';
    displayName: 'umrah-price';
  };
  attributes: {
    discounted_value: Schema.Attribute.Integer;
    isDiscounted: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    room: Schema.Attribute.Enumeration<['roomX2', 'roomX3', 'roomX4']>;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface QuranPageAyah extends Struct.ComponentSchema {
  collectionName: 'components_quran_page_ayahs';
  info: {
    description: '';
    displayName: 'pageAyah';
  };
  attributes: {
    ayah: Schema.Attribute.Relation<'oneToOne', 'api::ayah.ayah'>;
    hasSureStart: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    surah: Schema.Attribute.Relation<'oneToOne', 'api::surah.surah'>;
    text: Schema.Attribute.String;
  };
}

export interface QuranSurahAyahs extends Struct.ComponentSchema {
  collectionName: 'components_quran_surah_ayahs';
  info: {
    displayName: 'surahAyahs';
    icon: 'brush';
  };
  attributes: {
    ayah: Schema.Attribute.Relation<'oneToOne', 'api::ayah.ayah'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    notes: Schema.Attribute.Text;
    order: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    question: Schema.Attribute.String;
    showOnPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    keywords: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 165;
      }>;
    meta_img: Schema.Attribute.Media<'images'>;
    meta_robots: Schema.Attribute.String;
    meta_title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSocialNetworks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_networks';
  info: {
    description: '';
    displayName: 'social_networks';
  };
  attributes: {
    description: Schema.Attribute.String;
    display_name: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'instagram'>;
    name: Schema.Attribute.String;
    note: Schema.Attribute.String;
    showOnPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedTefsir extends Struct.ComponentSchema {
  collectionName: 'components_shared_tefsirs';
  info: {
    displayName: 'tefsir';
    icon: 'dashboard';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    mufassir: Schema.Attribute.Relation<'oneToOne', 'api::mufassir.mufassir'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.block': BlocksBlock;
      'blocks.cta': BlocksCta;
      'blocks.item': BlocksItem;
      'blocks.link': BlocksLink;
      'blocks.price': BlocksPrice;
      'blocks.project-item': BlocksProjectItem;
      'blocks.section-title': BlocksSectionTitle;
      'business.contact': BusinessContact;
      'business.endry-item': BusinessEndryItem;
      'business.google-map-location': BusinessGoogleMapLocation;
      'business.hero': BusinessHero;
      'business.menu-item': BusinessMenuItem;
      'business.oferta': BusinessOferta;
      'business.open-hours': BusinessOpenHours;
      'business.service-item': BusinessServiceItem;
      'business.service-light': BusinessServiceLight;
      'business.statistics': BusinessStatistics;
      'business.testimonial-item': BusinessTestimonialItem;
      'cwk.job-experience': CwkJobExperience;
      'idriz-umrah-block.info': IdrizUmrahBlockInfo;
      'idriz-umrah-block.ramadan': IdrizUmrahBlockRamadan;
      'idriz-umrah-block.social-post': IdrizUmrahBlockSocialPost;
      'idriz-umrah-block.umrah-price': IdrizUmrahBlockUmrahPrice;
      'quran.page-ayah': QuranPageAyah;
      'quran.surah-ayahs': QuranSurahAyahs;
      'shared.faq': SharedFaq;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.social-networks': SharedSocialNetworks;
      'shared.tefsir': SharedTefsir;
    }
  }
}
