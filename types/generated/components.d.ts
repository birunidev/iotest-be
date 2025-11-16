import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonReadMore extends Struct.ComponentSchema {
  collectionName: 'components_button_read_mores';
  info: {
    displayName: 'Read More';
    icon: 'link';
  };
  attributes: {
    read_more_button_link: Schema.Attribute.String & Schema.Attribute.Required;
    read_more_button_link_type: Schema.Attribute.Enumeration<
      ['external', 'internal']
    > &
      Schema.Attribute.Required;
    read_more_button_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentBasicContent extends Struct.ComponentSchema {
  collectionName: 'components_content_basic_contents';
  info: {
    displayName: 'basic_content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface ContentContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_content_sections';
  info: {
    displayName: 'content_section';
  };
  attributes: {
    repeatable_content: Schema.Attribute.Component<
      'content.basic-content',
      true
    >;
    section_title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.read-more': ButtonReadMore;
      'content.basic-content': ContentBasicContent;
      'content.content-section': ContentContentSection;
    }
  }
}
