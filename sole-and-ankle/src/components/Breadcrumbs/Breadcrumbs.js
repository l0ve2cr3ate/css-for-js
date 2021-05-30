import {
  BreadcrumbContainer,
  BreadcrumbsContainer,
  Link,
} from "./Breadcrumbs.styles";

const Breadcrumbs = ({ children }) => (
  <BreadcrumbsContainer role="breadcrumb">{children}</BreadcrumbsContainer>
);

Breadcrumbs.Breadcrumb = ({ href, children, rest }) => (
  <BreadcrumbContainer>
    <Link href={href} {...rest}>
      {children}
    </Link>
  </BreadcrumbContainer>
);

export default Breadcrumbs;
