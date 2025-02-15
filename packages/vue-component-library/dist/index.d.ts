import { default as AlphabeticalBrowseBy } from './lib-components/AlphabeticalBrowseBy.vue';
import { default as BlockCardWithIllustration } from './lib-components/BlockCardWithIllustration.vue';
import { default as ButtonLink } from './lib-components/ButtonLink.vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { default as IconWithLink } from './lib-components/IconWithLink.vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { default as SmartLink } from './lib-components/SmartLink.vue';

declare const __VLS_component: DefineComponent<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => void;
};
title: {
type: StringConstructor;
required: true;
};
description: {
type: StringConstructor;
default: string;
};
category: {
type: StringConstructor;
default: string;
};
dateCreated: {
type: StringConstructor;
default: string;
};
startDate: {
type: StringConstructor;
default: string;
};
endDate: {
type: StringConstructor;
default: string;
};
locations: {
type: PropType<LocationItemType[]>;
default: () => never[];
};
byline: {
type: PropType<string[]>;
default: () => never[];
};
to: {
type: StringConstructor;
default: string;
};
breadcrumb: {
type: StringConstructor;
default: string;
};
prompt: {
type: StringConstructor;
default: string;
};
alignRight: {
type: BooleanConstructor;
default: boolean;
};
ratio: {
type: NumberConstructor;
default: number;
};
registerEvent: {
type: BooleanConstructor;
default: boolean;
};
titleLink: {
type: StringConstructor;
default: string;
};
sectionHandle: {
type: StringConstructor;
default: string;
};
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => void;
};
title: {
type: StringConstructor;
required: true;
};
description: {
type: StringConstructor;
default: string;
};
category: {
type: StringConstructor;
default: string;
};
dateCreated: {
type: StringConstructor;
default: string;
};
startDate: {
type: StringConstructor;
default: string;
};
endDate: {
type: StringConstructor;
default: string;
};
locations: {
type: PropType<LocationItemType[]>;
default: () => never[];
};
byline: {
type: PropType<string[]>;
default: () => never[];
};
to: {
type: StringConstructor;
default: string;
};
breadcrumb: {
type: StringConstructor;
default: string;
};
prompt: {
type: StringConstructor;
default: string;
};
alignRight: {
type: BooleanConstructor;
default: boolean;
};
ratio: {
type: NumberConstructor;
default: number;
};
registerEvent: {
type: BooleanConstructor;
default: boolean;
};
titleLink: {
type: StringConstructor;
default: string;
};
sectionHandle: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{}>, {
media: MediaItemType;
description: string;
category: string;
dateCreated: string;
startDate: string;
endDate: string;
locations: LocationItemType[];
byline: string[];
to: string;
breadcrumb: string;
prompt: string;
alignRight: boolean;
ratio: number;
registerEvent: boolean;
titleLink: string;
sectionHandle: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_2: DefineComponent<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => void;
};
src: {
type: StringConstructor;
default: string;
};
height: {
type: NumberConstructor;
default: number;
};
width: {
type: NumberConstructor;
default: number;
};
alt: {
type: StringConstructor;
default: string;
};
srcset: {
type: StringConstructor;
default: string;
};
sizes: {
type: StringConstructor;
default: string;
};
caption: {
type: StringConstructor;
default: string;
};
aspectRatio: {
type: NumberConstructor;
default: number;
};
objectFit: {
type: StringConstructor;
default: string;
};
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => void;
};
src: {
type: StringConstructor;
default: string;
};
height: {
type: NumberConstructor;
default: number;
};
width: {
type: NumberConstructor;
default: number;
};
alt: {
type: StringConstructor;
default: string;
};
srcset: {
type: StringConstructor;
default: string;
};
sizes: {
type: StringConstructor;
default: string;
};
caption: {
type: StringConstructor;
default: string;
};
aspectRatio: {
type: NumberConstructor;
default: number;
};
objectFit: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{}>, {
media: MediaItemType;
src: string;
height: number;
width: number;
alt: string;
srcset: string;
sizes: string;
caption: string;
aspectRatio: number;
objectFit: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_3: DefineComponent<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => {};
};
mode: {
type: StringConstructor;
default: string;
};
aspectRatio: {
type: NumberConstructor;
default: number;
};
objectFit: {
type: StringConstructor;
default: string;
};
playsinline: {
type: BooleanConstructor;
default: boolean;
};
autoplay: {
type: BooleanConstructor;
default: boolean;
};
loop: {
type: BooleanConstructor;
default: boolean;
};
muted: {
type: BooleanConstructor;
default: boolean;
};
controls: {
type: BooleanConstructor;
default: boolean;
};
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
ended: (...args: any[]) => void;
error: (...args: any[]) => void;
"error-image": (...args: any[]) => void;
"error-video": (...args: any[]) => void;
loaded: (...args: any[]) => void;
"loaded-image": (...args: any[]) => void;
"loaded-video": (...args: any[]) => void;
playing: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => {};
};
mode: {
type: StringConstructor;
default: string;
};
aspectRatio: {
type: NumberConstructor;
default: number;
};
objectFit: {
type: StringConstructor;
default: string;
};
playsinline: {
type: BooleanConstructor;
default: boolean;
};
autoplay: {
type: BooleanConstructor;
default: boolean;
};
loop: {
type: BooleanConstructor;
default: boolean;
};
muted: {
type: BooleanConstructor;
default: boolean;
};
controls: {
type: BooleanConstructor;
default: boolean;
};
}>> & Readonly<{
onEnded?: ((...args: any[]) => any) | undefined;
onError?: ((...args: any[]) => any) | undefined;
"onError-image"?: ((...args: any[]) => any) | undefined;
"onError-video"?: ((...args: any[]) => any) | undefined;
onLoaded?: ((...args: any[]) => any) | undefined;
"onLoaded-image"?: ((...args: any[]) => any) | undefined;
"onLoaded-video"?: ((...args: any[]) => any) | undefined;
onPlaying?: ((...args: any[]) => any) | undefined;
}>, {
media: MediaItemType;
aspectRatio: number;
objectFit: string;
mode: string;
playsinline: boolean;
autoplay: boolean;
loop: boolean;
muted: boolean;
controls: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {
videoRef: HTMLVideoElement;
}, HTMLElement>;

declare const __VLS_component_4: DefineComponent<ExtractPropTypes<    {
richTextContent: {
type: StringConstructor;
default: string;
};
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
richTextContent: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{}>, {
richTextContent: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        credit?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        videoRef: HTMLVideoElement;
    };
    rootEl: HTMLElement;
};

declare function __VLS_template_4(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare interface AcademicDepartmentsItemType {
    id: string;
    title: string;
}

export { AlphabeticalBrowseBy }

export declare interface AlternativeNameItemType {
    fullName: string;
    languageAltName: string;
}

export declare interface AmenitiesType {
    title: string;
    icon: string;
}

export declare interface ArticleStaffItemType {
    id: string;
    title?: string;
    to?: string;
}

export declare interface AuthorsItemType {
    id: string;
    slug: string;
    to: string;
    title: string;
}

export declare const BannerFeatured: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare const BannerHeader: DefineComponent<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => void;
};
title: {
type: StringConstructor;
required: true;
};
text: {
type: StringConstructor;
default: string;
};
byline: {
type: PropType<string[]>;
default: () => never[];
};
contributors: {
type: ArrayConstructor;
default: () => never[];
};
subjectAreas: {
type: PropType<SubjectAreaItemType[]>;
default: () => never[];
};
dateCreated: {
type: StringConstructor;
default: string;
};
startDate: {
type: StringConstructor;
default: string;
};
endDate: {
type: StringConstructor;
default: string;
};
locations: {
type: PropType<LocationItemType[]>;
default: () => never[];
};
to: {
type: StringConstructor;
default: string;
};
category: {
type: StringConstructor;
default: string;
};
prompt: {
type: StringConstructor;
default: string;
};
alignRight: {
type: BooleanConstructor;
default: boolean;
};
ratio: {
type: NumberConstructor;
default: number;
};
email: {
type: StringConstructor;
default: string;
};
phone: {
type: StringConstructor;
default: string;
};
address: {
type: StringConstructor;
default: string;
};
addressLink: {
type: StringConstructor;
default: string;
};
staffDirectoryLink: {
type: StringConstructor;
default: string;
};
isEvent: {
type: BooleanConstructor;
default: boolean;
};
registerEvent: {
type: BooleanConstructor;
default: boolean;
};
sectionHandle: {
type: StringConstructor;
default: string;
};
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
media: {
type: PropType<MediaItemType>;
default: () => void;
};
title: {
type: StringConstructor;
required: true;
};
text: {
type: StringConstructor;
default: string;
};
byline: {
type: PropType<string[]>;
default: () => never[];
};
contributors: {
type: ArrayConstructor;
default: () => never[];
};
subjectAreas: {
type: PropType<SubjectAreaItemType[]>;
default: () => never[];
};
dateCreated: {
type: StringConstructor;
default: string;
};
startDate: {
type: StringConstructor;
default: string;
};
endDate: {
type: StringConstructor;
default: string;
};
locations: {
type: PropType<LocationItemType[]>;
default: () => never[];
};
to: {
type: StringConstructor;
default: string;
};
category: {
type: StringConstructor;
default: string;
};
prompt: {
type: StringConstructor;
default: string;
};
alignRight: {
type: BooleanConstructor;
default: boolean;
};
ratio: {
type: NumberConstructor;
default: number;
};
email: {
type: StringConstructor;
default: string;
};
phone: {
type: StringConstructor;
default: string;
};
address: {
type: StringConstructor;
default: string;
};
addressLink: {
type: StringConstructor;
default: string;
};
staffDirectoryLink: {
type: StringConstructor;
default: string;
};
isEvent: {
type: BooleanConstructor;
default: boolean;
};
registerEvent: {
type: BooleanConstructor;
default: boolean;
};
sectionHandle: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{}>, {
media: MediaItemType;
address: string;
text: string;
category: string;
dateCreated: string;
startDate: string;
endDate: string;
locations: LocationItemType[];
byline: string[];
to: string;
prompt: string;
alignRight: boolean;
ratio: number;
registerEvent: boolean;
sectionHandle: string;
contributors: unknown[];
subjectAreas: SubjectAreaItemType[];
email: string;
phone: string;
addressLink: string;
staffDirectoryLink: string;
isEvent: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

export declare const BannerText: DefineComponent<ExtractPropTypes<    {
category: {
type: StringConstructor;
default: string;
};
title: {
type: StringConstructor;
default: string;
required: true;
};
alternativeFullName: {
type: StringConstructor;
default: string;
};
language: {
type: StringConstructor;
default: string;
};
startDate: {
type: StringConstructor;
default: string;
};
endDate: {
type: StringConstructor;
default: string;
};
dateCreated: {
type: StringConstructor;
default: string;
};
locations: {
type: PropType<LocationItemType[]>;
default: () => never[];
};
isOnline: {
type: BooleanConstructor;
default: boolean;
};
text: {
type: StringConstructor;
default: string;
};
buttonText: {
type: StringConstructor;
default: string;
};
to: {
type: StringConstructor;
default: string;
};
isDarkBlue: {
type: BooleanConstructor;
default: boolean;
};
email: {
type: StringConstructor;
default: string;
};
phone: {
type: StringConstructor;
default: string;
};
address: {
type: StringConstructor;
default: string;
};
addressLink: {
type: StringConstructor;
default: string;
};
staffDirectoryLink: {
type: StringConstructor;
default: string;
};
articleType: {
type: StringConstructor;
default: string;
};
byline: {
type: PropType<string[]>;
default: () => never[];
};
subjectAreas: {
type: PropType<SubjectAreaItemType[]>;
default: () => never[];
};
registerEvent: {
type: BooleanConstructor;
default: boolean;
};
sectionHandle: {
type: StringConstructor;
default: string;
};
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
category: {
type: StringConstructor;
default: string;
};
title: {
type: StringConstructor;
default: string;
required: true;
};
alternativeFullName: {
type: StringConstructor;
default: string;
};
language: {
type: StringConstructor;
default: string;
};
startDate: {
type: StringConstructor;
default: string;
};
endDate: {
type: StringConstructor;
default: string;
};
dateCreated: {
type: StringConstructor;
default: string;
};
locations: {
type: PropType<LocationItemType[]>;
default: () => never[];
};
isOnline: {
type: BooleanConstructor;
default: boolean;
};
text: {
type: StringConstructor;
default: string;
};
buttonText: {
type: StringConstructor;
default: string;
};
to: {
type: StringConstructor;
default: string;
};
isDarkBlue: {
type: BooleanConstructor;
default: boolean;
};
email: {
type: StringConstructor;
default: string;
};
phone: {
type: StringConstructor;
default: string;
};
address: {
type: StringConstructor;
default: string;
};
addressLink: {
type: StringConstructor;
default: string;
};
staffDirectoryLink: {
type: StringConstructor;
default: string;
};
articleType: {
type: StringConstructor;
default: string;
};
byline: {
type: PropType<string[]>;
default: () => never[];
};
subjectAreas: {
type: PropType<SubjectAreaItemType[]>;
default: () => never[];
};
registerEvent: {
type: BooleanConstructor;
default: boolean;
};
sectionHandle: {
type: StringConstructor;
default: string;
};
}>> & Readonly<{}>, {
address: string;
title: string;
text: string;
category: string;
dateCreated: string;
startDate: string;
endDate: string;
locations: LocationItemType[];
byline: string[];
to: string;
registerEvent: boolean;
sectionHandle: string;
subjectAreas: SubjectAreaItemType[];
email: string;
phone: string;
addressLink: string;
staffDirectoryLink: string;
alternativeFullName: string;
language: string;
isOnline: boolean;
buttonText: string;
isDarkBlue: boolean;
articleType: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

export declare const BlockAmenities: DefineComponent<ExtractPropTypes<    {
amenities: {
type: PropType<string[]>;
default: () => never[];
};
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
amenities: {
type: PropType<string[]>;
default: () => never[];
};
}>> & Readonly<{}>, {
amenities: string[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

export declare interface BlockCallToActionTwoUpType {
    svgName: string;
    title: string;
    text: string;
    name: string;
    to: string;
    isDark: boolean;
    isSmallSize: boolean;
}

export declare interface BlockCardMetaType {
    to: string;
    category: string;
    title: string;
    alternativeFullName: string;
    language: string;
    text: string;
    locations?: LocationItemType[];
    tagLabels?: EventFiltersItemType[];
    bylineOne: string;
    bylineTwo: string;
    ongoing: boolean;
    postDate?: string;
}

export { BlockCardWithIllustration }

export declare interface BlockImpactNumbersCarouselType {
    largeText: string;
    mediumText: string;
    smallDescriptor: string;
    image: MediaItemType[];
    altImageText: string;
}

export declare interface BlockScreeningDetailsItemType {
    screeningCount?: string;
    count?: string;
    title?: string;
    alternateTitle?: string;
    language?: string;
    year?: string;
    country?: string;
    languageInfo?: string;
    runtime?: string;
    tagLabels?: EventFiltersItemType[];
    text?: string;
    trailer?: string;
    image?: MediaItemType;
}

export declare interface BlockStaffArticleListItemType {
    image?: MediaItemType;
    to?: string;
    category?: string;
    title?: string;
    date?: string;
    authors?: AuthorsItemType[];
    description?: string;
    externalResourceUrl?: string;
    startDate?: string;
    endDate?: string;
    ongoing?: boolean;
}

export declare interface BlockStaffListItemType {
    to: string;
    nameLast: string;
    nameFirst: string;
    jobTitle: string;
    departments: DepartmentItemType[];
    email: string;
    topics: TopicsItemType[];
    alternativeName?: AlternativeNameItemType[];
    alternativeFullName?: string;
    subjectArea?: string;
    staffName?: string;
    language?: string;
    locations?: StaffLocationItemType[];
    phone?: string;
    consultation?: string;
    academicDepartments?: AcademicDepartmentsItemType[];
    uri: string;
    image?: MediaItemType;
    biography?: string;
    orcid?: string;
    publications?: string;
    pronouns?: string;
    slug: string;
    sectionHandle: string;
    subjectLibrarian: boolean;
}

export { ButtonLink }

export declare interface CardItemType {
    category?: string;
    externalResourceUrl?: string;
    iconName?: string;
    id?: string;
    slug?: string;
    text: string;
    title: string;
    to: string;
    type?: string;
}

declare type customKind = 'image' | 'video' | 'audio';

export declare interface DepartmentItemType {
    id?: string;
    title: string;
    to?: string;
}

export declare interface EventFiltersItemType {
    id: string;
    title: string;
    isHighlighted?: boolean;
}

export declare interface EventItemType {
    image: MediaItemType;
    category: string;
    title: string;
    text?: string;
    prompt?: string;
    startDate: string;
    endDate: string;
    to: string;
    sectionHandle?: string;
    locations: LocationItemType[];
    ongoing?: boolean;
    tagLabels?: EventFiltersItemType[];
}

export declare interface GridGalleryItemType {
    image?: MediaItemType;
    monthYear?: string;
    to?: string;
    headlineText?: string;
    snippet?: string;
    featured?: boolean;
}

export { IconWithLink }

export declare interface ImageGalleryItemType {
    image: MediaItemType;
    creditText?: string;
}

export declare interface LocationItemType {
    id?: string;
    title: string;
    to: string;
}

export declare interface MediaGalleryItemType {
    id?: string;
    captionTitle?: string;
    captionText?: string;
    sortOrder?: number;
    item: MediaItemType[];
    credit?: string;
    linkUrl?: string;
    linkText?: string;
    coverImage?: MediaItemType[];
    embedCode?: string;
}

export declare interface MediaItemType {
    alt?: string;
    caption?: string;
    focalPoint?: number[];
    height?: number;
    id?: string;
    kind?: customKind;
    poster?: string;
    sizes?: string;
    src?: string;
    srcset?: string;
    title?: string;
    type?: string;
    width?: number;
}

declare interface NavItem {
    id?: string;
    name: string;
    to?: string;
    classes?: string;
    target?: string;
}

declare interface NavPrimaryBaseItem extends NavItem {
    children?: NavItem[];
}

export declare interface NavPrimaryItemType extends NavPrimaryBaseItem {
    url?: string;
    isActive?: boolean;
}

export declare interface NavSecondaryItemType extends NavItem {
    text?: string;
}

export declare const ResponsiveImage: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;

export declare const ResponsiveVideo: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

export declare const RichText: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

export declare interface SearchLinkItemType {
    text: string;
    url: string;
    blank?: string;
}

export declare interface SectionGenericListItemType {
    title?: string;
    alternativeFullName?: string;
    language?: string;
    summary?: string;
    jobType?: {
        title?: string;
    }[];
    jobRequisitionNumber?: string;
    jobPostingURL?: string;
    department?: DepartmentItemType[];
    associatedLocations?: LocationItemType[];
    payRate?: string;
}

export declare interface SectionSpaceListItemType {
    to: string;
    title: string;
    location: string;
    text: string;
    buttonUrl: string;
    buttonText?: string;
    isOnline?: boolean;
}

export { SmartLink }

export declare interface StaffLocationItemType {
    id?: string;
    image?: MediaItemType;
    locationType?: string;
    title?: string;
    to?: string;
    uri?: string;
    affiliateLibraryUrl?: string;
    address?: string;
    addressLink?: string;
    amenities?: AmenitiesType[];
    reserveSeat?: string;
    isUclaLibrary?: boolean;
    libcalLocationIdForHours?: string;
}

export declare interface StylesItemType {
    paddingBottom?: string;
    backgroundColor?: string;
    objectPosition?: string;
}

export declare interface SubjectAreaItemType {
    title: string;
}

export declare interface TopicsItemType {
    id: string;
    title: string;
}

export { }
