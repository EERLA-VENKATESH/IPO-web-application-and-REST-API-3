export async function fetchIPOs() {
    // Mocking IPO list with 10 companies and valid logos
    return [
      {
        id: 1,
        name: 'Apple',
        priceBand: '₹100 - ₹120',
        status: 'Upcoming',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', // Apple
      },
      {
        id: 2,
        name: 'Microsoft',
        priceBand: '₹150 - ₹170',
        status: 'Listed',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', // Microsoft
      },
      {
        id: 3,
        name: 'Google',
        priceBand: '₹90 - ₹110',
        status: 'Upcoming',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Google
      },
      {
        id: 4,
        name: 'amazon',
        priceBand: '₹200 - ₹220',
        status: 'Upcoming',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', // Amazon
      },
      {
        id: 5,
        name: 'Facebook',
        priceBand: '₹180 - ₹200',
        status: 'Listed',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png', // Facebook (Meta)
      },
      {
        id: 6,
        name: 'Netflix',
        priceBand: '₹130 - ₹150',
        status: 'Upcoming',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', // Netflix
      },
      {
        id: 7,
        name: 'Tesla',
        priceBand: '₹75 - ₹95',
        status: 'Listed',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg', // Tesla
      },
      {
        id: 8,
        name: 'IBM',
        priceBand: '₹120 - ₹140',
        status: 'Upcoming',
        logoUrl: '	https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', // Adobe
      },
      {
        id: 9,
        name: 'PayPal',
        priceBand: '₹160 - ₹180',
        status: 'Listed',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', // PayPal
      },
      {
        id: 10,
        name: 'Samsung',
        priceBand: '₹210 - ₹230',
        status: 'Upcoming',
        logoUrl: '	https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', // Intel
      },
    ];
  }
  
  export async function fetchIPODetail(id) {
    const companyDetails = [
      { name: 'Apple', priceBand: '₹100 - ₹120', issueSize: '₹500 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'Microsoft', priceBand: '₹150 - ₹170', issueSize: '₹600 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
      { name: 'Google', priceBand: '₹90 - ₹110', issueSize: '₹400 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
      { name: 'amazon', priceBand: '₹200 - ₹220', issueSize: '₹700 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
      { name: 'Facebook', priceBand: '₹180 - ₹200', issueSize: '₹550 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
      { name: 'Netflix', priceBand: '₹130 - ₹150', issueSize: '₹450 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
      { name: 'Tesla', priceBand: '₹75 - ₹95', issueSize: '₹300 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
      { name: 'IBM', priceBand: '₹120 - ₹140', issueSize: '₹480 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Adobe_Corporate_Logo.png' },
      { name: 'PayPal', priceBand: '₹160 - ₹180', issueSize: '₹520 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
      { name: 'SamSung', priceBand: '₹210 - ₹230', issueSize: '₹800 Cr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
    ];
  
    const company = companyDetails[id - 1] || companyDetails[0];
  
    return {
      id,
      name: company.name,
      priceBand: company.priceBand,
      issueSize: company.issueSize,
      openDate: '2025-05-01',
      closeDate: '2025-05-03',
      listingDate: '2025-05-10',
      status: id % 2 === 0 ? 'Listed' : 'Upcoming',
      ipoPrice: '₹100',
      listingPrice: '₹120',
      cmp: '₹125',
      return: '+25%',
      rhpLink: '#',
      drhpLink: '#',
      logoUrl: company.logoUrl, // correct logo
    };
  }
  