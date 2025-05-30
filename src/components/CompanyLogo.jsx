function CompanyLogo({ logoUrl, altText }) {
    return (
      <img src={logoUrl} alt={altText} className="h-20 w-auto mx-auto" />
    );
  }
  
  export default CompanyLogo;
  