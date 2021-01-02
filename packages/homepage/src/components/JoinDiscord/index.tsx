import React from 'react'

import DiscordButton from '../DiscordButton'

import styles from './styles.module.scss'

const JoinDiscord = () => (
  <div className={styles.container}>
    <h2>Join our Discord</h2>
    <DiscordButton
      variant="contained"
      href="https://discord.gg/W2NteY4dDS"
      size="small"
      title="join our discord"
    />
  </div>
)

export default JoinDiscord
