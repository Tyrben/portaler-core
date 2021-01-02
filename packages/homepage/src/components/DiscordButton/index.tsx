import React, { FC } from 'react'

import Button, { ButtonProps } from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

import discord from '../../images/discord-white.svg'

import styles from './styles.module.scss'

const DiscordStyledButton = withStyles(() => ({
  root: {
    backgroundColor: '#7289DA',
    '&:hover': {
      backgroundColor: '#869ADF',
    },
  },
}))(Button)

const DiscordButton: FC<ButtonProps> = ({ children, ...rest }) => (
  <DiscordStyledButton {...rest}>
    <img className={styles.logo} src={discord} alt="discord" />
    {children}
  </DiscordStyledButton>
)

export default DiscordButton
