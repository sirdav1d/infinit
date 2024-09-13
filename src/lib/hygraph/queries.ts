/** @format */

export const ErrorQuery = `query MyQuery {
  notfounds {
    headline
    lottiedata
  }
}`;

export const ThanksQuery = `query MyQuery {
  thanksPages {
    headline
    subheadline
    lottiedata
  }
}`;

export const PoliticsQuery = `query MyQuery {
  politics {
    politic {
      raw
    }
    term {
      raw
    }
  }
}`;

export const HomepageQuery = `query MyQuery {
  homepages {
    headline
    subheadline
    herocta
    heroimage {
      url
    }
    sectionaboutheadline
    sectionaboutsubheadline
    sectionabouttagline
    sectionaboutimage {
      url
    }
    sectionaboutcta
    servicesection {
      tagline
      title
      description
      servicelist {
        id
        icon {
          url
        }
        title
        description
      }
    }
    features {
      image {
        url
      }
      tagline
      title
      id
      description
    }
    sectionctaheadline
    sectionctadescription
    sectionctabtn
    sectionctaimage{
      url
    }
  }
}`;

export const AboutQuery = `query MyQuery {
  aboutpages {
    heroheadline
    herosubheadline
    herocta
    videohero {
      url
    }
    sectionculturetagline
    sectionculturetitle
    sectionculturedescription
    culturelist {
      id
      title
      description
      icon {
        url
      }
    }
    sectiontimelinetagline
    sectiontimelineheadline
    sectiontimelinesubheadline
    timelinelist {
      id
      title
      description
      date
    }
    sectionctaheadline
    sectionctasubheadline
    sectionctabtn
    sectionctaimage {
      url
    }
    
  }
}`;
