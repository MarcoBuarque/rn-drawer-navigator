import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const View = styled.View`
  ${props => props.color && css`background-color: ${props.color};`}
  ${props => props.width && css`width: ${props.width};`}
  ${props => props.height && css`height: ${props.height};`}
  ${props => props.alignItems && css`align-items: ${props => props.alignItems};`}
  ${props => props.justifyContent && css`justify-content: ${props => props.justifyContent};`}
`
View.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
}

export const Container = styled(View)`
  padding-horizontal: 16px;
`

export const Row = styled(View)`
  flex-direction: row
`

export const Text = styled.Text`
  ${props => props.color && css`color: ${props.color};`}
  ${props => props.size && css`font-size: ${props.size}px;`}
`
Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

Text.defaultProps = {
  color: '#000',
  size: 16
}

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-left: 16px;
`