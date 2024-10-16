import Link from 'next/link';
import styled from 'styled-components';
import {
	top,
	left,
	right,
	space,
	width,
	order,
	color,
	bottom,
	height,
	border,
	zIndex,
	display,
	opacity,
	minWidth,
	maxWidth,
	flexWrap,
	position,
	overflow,
	fontSize,
	fontStyle,
	overflowY,
	minHeight,
	boxShadow,
	textAlign,
	alignSelf,
	maxHeight,
	borderTop,
	fontFamily,
	lineHeight,
	fontWeight,
	alignItems,
	borderLeft,
	background,
	textShadow,
	borderColor,
	borderRight,
	buttonStyle,
	borderBottom,
	borderRadius,
	flexDirection,
	justifyContent,
} from 'styled-system';
////////////////////////////////////////////////////

export const Box = styled.div`
  ${space}
  ${width}
  ${order}
  ${color}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${display}
  ${minWidth}
  ${position}
  ${fontSize}
  ${maxWidth}
  ${overflow}
  ${boxShadow}
  ${minHeight}
  ${overflowY}
  ${alignSelf}
  ${textAlign}
  ${maxHeight}
  ${borderTop}
  ${background}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}

  cursor: ${({ cursor }) => cursor};
  transition: ${({ transition }) => transition};
`;

export const FlexBox = styled(Box)`
  ${maxWidth}
  ${flexWrap}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}

  display: ${({ display }) => display || 'flex'};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) => borderBottomLeftRadius};
`;

export const HoveredFlexBox = styled(FlexBox)`
  &:hover {
    color: ${({ hoveredColor }) => hoveredColor};
    font-weight: ${({ hoveredFontWeight }) => hoveredFontWeight};
  }
`;

export const RelativeBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}

  position: relative;
`;

export const RelativeFlexBox = styled(FlexBox)`
  ${top}
  ${left}
  ${right}
  ${bottom}

  position: relative;
`;

export const AbsoluteBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${display}

  position: absolute;
`;

export const AbsoluteFlexBox = styled(FlexBox)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${justifyContent}

  position: absolute;
  padding: ${({ padding }) => padding};
`;

export const FixedFlexBox = styled(FlexBox)`
  ${top}
  ${left}
  ${right}
  ${bottom}

  position: fixed;
  transition: ${({ transition }) => transition};
  border-bottom-left-radius: ${({ borderBLRadius }) => borderBLRadius};
  border-bottom-right-radius: ${({ borderBRRadius }) => borderBRRadius};
`;

export const Ul = styled.ul`
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  ${fontWeight}

  width:  ${({ width }) => width || '100%'};
`;

export const Ol = styled.ol`
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  ${fontWeight}
`;

export const Li = styled.li`
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  ${fontWeight}
  ${lineHeight}

  color: ${({ color }) => color || 'black'};
  margin-top: ${({ marginTop }) => marginTop || '10px'};
  margin-left: ${({ marginLeft }) => marginLeft || '18px'};
  list-style-type: ${({ listStyleType }) => listStyleType || null };
`;

export const LiOl = styled.li`
  color: ${({ color }) => color || 'black'};
  margin: ${({ margin }) => margin || '30px 0 0 20px'};
  font-weight:  ${({ fontWeight }) => fontWeight || '600'};
  list-style-type: ${({ listStyleType }) => listStyleType || null };

  @media (min-width: 0px) {
    font-size: 16px;
  }

  @media (min-width: 640px) {
    font-size: 18px;
  }

  @media (min-width: 832px) {
    font-size: 20px;
  }
`;

export const LiUl = styled.li`
  color: ${({ color }) => color || 'black'};
  font-size:${({ fontSize }) => fontSize || '14px'};
  margin-top: ${({ marginTop }) => marginTop || '10px'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  margin-left: ${({ marginLeft }) => marginLeft || '50px'};
  list-style-type: ${({ listStyleType }) => listStyleType || 'disc' };

  @media (min-width: 0px) {
    font-size: 10px;
  }

  @media (min-width: 640px) {
    font-size: 12px;
  }

  @media (min-width: 832px) {
    font-size: 14px;
  }
`;

export const Table = styled.table`
  ${width}

  border: ${({ border }) => border || '1px solid black' }
`;

export const Thead = styled.thead`
  ${width}
`;

export const Tbody = styled.tbody`
  ${width}
`;

export const Tr = styled.tr`
  ${width}
`;

export const Td = styled.td`
  ${width}

  vertical-align: middle;
  margin: ${({ margin }) => margin || '0'};
  color: ${({ color }) => color || 'black'};
  padding: ${({ padding }) => padding || '10px'};
  font-size: ${({  fontSize }) =>  fontSize || '14px'};
  text-align: ${({ textAlign }) => textAlign || 'start'};
  border: ${({ border }) => border || '1px solid black'};
  font-weight:  ${({ fontWeight }) => fontWeight || '400'};
`;

export const Article = styled.article`
  ${space}
  ${width}
  ${color}
  ${height}
  ${display}
  ${fontSize}
  ${maxWidth}
  ${background}
`;

export const Section = styled.section`
  ${space}
  ${width}
  ${color}
  ${height}
  ${zIndex}
  ${display}
  ${position}
  ${maxWidth}
  ${minWidth}
  ${borderTop}
  ${background}
  ${alignItems}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderRadius}
  ${flexDirection}
  ${justifyContent}

  cursor: ${({ cursor }) => cursor};
`;

const InstanceButton = styled.button`
  ${space}
  ${width}
  ${color}
  ${height}
  ${border}
  ${display}
  ${opacity}
  ${fontSize}
  ${minWidth}
  ${position}
  ${flexWrap}
  ${alignSelf}
  ${alignItems}
  ${fontWeight}
  ${background}
  ${borderColor}
  ${borderRadius}
  ${justifyContent}

  cursor: ${({ cursor }) => cursor || 'pointer'};

  transform: ${({ transform }) => transform};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  transition: ${({ transition }) => transition || 'all 0.2s linear'};
`;

export const Button = styled(InstanceButton)(buttonStyle);

export const IconWrapper = styled.div`
  ${top}
  ${left}
  ${space}
  ${order}
  ${width}
  ${right}
  ${bottom}
  ${border}
  ${height}
  ${display}
  ${position}

  user-select: none;
  transform: ${({ transform }) => transform};
  cursor: ${({ cursor }) => cursor || 'pointer'};

  &:hover {
    background-color: ${({ bgColor }) => bgColor};
  }
`;

export const LinkWrapper = styled(Box)`
  ${width}
  ${bottom}
  ${height}
  ${display}
  ${position}
  ${background};
  
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor || 'pointer'};
`;

export const LinkInternal = styled(Link)`
  ${color}
  ${opacity}
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  ${fontWeight}

  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${({ hoveredColor }) => hoveredColor};
  }
`;

export const StyledLink = styled.a`
  ${color}
  ${space}
  ${display}
  ${opacity}
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  ${fontWeight}
  ${justifyContent}

  cursor: pointer;

  text-transform: ${({ textTransform }) => textTransform};

  &:hover {
    color: ${({ hoveredColor }) => hoveredColor};
    text-decoration: ${({ textDecoration }) => textDecoration || 'underline'};
  }
`;

export const LinkContact = styled(Link)`
  ${color}

  &:hover {
    color: ${({ hoveredColor }) => hoveredColor};
    text-decoration: ${({ textDecoration }) => textDecoration || 'underline'};
  }
`;

export const Ellipse = styled(Box)`
  ${border}
  ${display}
  ${fontWeight}
  ${fontFamily}
  ${borderColor}
  
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  margin: ${({ margin }) => margin};
  transform: ${({ transform }) => transform};
  background: ${({ background }) => background};
`;

export const Text = styled.p`
  ${space}
  ${color}
  ${width}
  ${display}
  ${opacity}
  ${fontSize}
  ${maxWidth}
  ${fontStyle}
  ${textAlign}
  ${lineHeight}
  ${fontFamily}
  ${fontWeight}
  ${borderColor}
  ${borderBottom}

  cursor: ${({ cursor }) => cursor};
  word-break: ${({ wordBreak }) => wordBreak};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  overflow: ${({ withEllipsis }) => withEllipsis ? 'hidden' : 'initial'};
  white-space: ${({ withEllipsis }) => withEllipsis ? 'nowrap' : 'initial'};
  text-overflow: ${({ withEllipsis }) => withEllipsis ? 'ellipsis' : 'initial'};
`;

export const TextNormal = styled(Text)`
  color: ${({ color }) => color || 'black'};
  margin: ${({ margin }) => margin || '10px 0 0'};

  @media (min-width: 0px) {
    font-size: 10px;
  }

  @media (min-width: 640px) {
    font-size: 12px;
  }

  @media (min-width: 832px) {
    font-size: 14px;
  }
`;

export const TextItalic = styled(Text)`
  color: ${({ color }) => color || 'black'};
  margin: ${({ margin }) => margin || '10px 0 0'};
  font-style: ${({ fontStyle }) => fontStyle || 'italic'};

  @media (min-width: 0px) {
    font-size: 10px;
  }

  @media (min-width: 640px) {
    font-size: 12px;
  }

  @media (min-width: 832px) {
    font-size: 14px;
  }
`;

export const TextBold = styled(Text)`
  color: ${({ color }) => color || 'black'};
  margin: ${({ margin }) => margin || '10px 0 0'};
  font-weight:  ${({ fontWeight }) => fontWeight || '700'};

  @media (min-width: 0px) {
    font-size: 12px;
  }

  @media (min-width: 640px) {
    font-size: 14px;
  }

  @media (min-width: 832px) {
    font-size: 16px;
  }
`;

export const PageTitle = styled.h1`
  ${space}
  ${color}
  ${width}
  ${maxWidth}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontFamily}
  ${fontWeight}
  ${textShadow}

  text-transform: ${({ textTransform }) => textTransform};
`;

export const SectionTitle = styled.h2`
  ${space}
  ${color}
  ${width}
  ${height}
  ${fontSize}
  ${maxWidth}
  ${textAlign}
  ${textShadow}
  ${lineHeight}
  ${fontWeight}
  ${fontFamily}

  text-transform: ${({ textTransform }) => textTransform};
`;

export const ArticleTitle = styled.h3`
  ${top}
  ${space}
  ${color}
  ${width}
  ${maxWidth}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}

  text-transform: ${({ textTransform }) => textTransform};
`;

export const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  display: flex;
  padding: 16px;
  height: 100vh;
  position: fixed;
  align-items: center;
  background: #FFFFFFB2;
  backdrop-filter: blur(2px);

  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
`;

export const Span = styled.span`
  ${color}
  ${width}
  ${display}
  ${fontSize}
  ${position}
  ${textAlign}
  ${fontStyle}
  ${lineHeight}
  ${borderRadius}
  
  padding: ${({ padding }) => padding};
`;

export const HeaderWrapper = styled.header`
  ${color}
  ${display}
  ${maxWidth}

  top: 0;
  width: 100%;
  z-index: 200;
  display: flex;
  position: sticky;
  justify-content: center;
  
  padding: ${({ padding }) => padding};
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
`;

export const Iframe = styled.iframe`
  ${space}
  ${width}
  ${border}
  ${height}
  ${minHeight}
  ${borderColor}
  ${borderRadius}
`;

export const Video = styled.video`
  ${width}
  ${border}
  ${height}
  ${maxWidth}
  ${maxHeight}
  ${borderColor}
  ${borderRadius}
  
  padding: ${({ padding }) => padding};
`;

export const FooterWrapper = styled.footer`
  ${width}
  ${zIndex}
  ${position}
`;

export const MaskedWrapper = styled.div`
  ::after {
    ${zIndex}
    ${background}
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    position: absolute;
    mix-blend-mode: darken;
  }
`;
