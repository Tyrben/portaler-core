import React, { FC } from 'react'

import FormControl from '@material-ui/core/FormControl'

import DiscordButton from '../DiscordButton'

import styles from './styles.module.scss'

interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <div className={styles.loginContainer}>
    <h2>Login</h2>
    <FormControl>
      <DiscordButton />
    </FormControl>
  </div>
)

export default Login
