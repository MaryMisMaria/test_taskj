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

export const Label = styled.label`
  ${space}
  ${width}
  ${color}
  ${display}
  ${fontSize}
  ${alignItems}
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
