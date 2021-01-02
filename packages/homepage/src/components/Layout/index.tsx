import './index.scss'

import React, { FC } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import cn from 'clsx'

import Footer from '../Footer'
import Header from '../Header'

import styles from './styles.module.scss'
import theme from './theme'

interface LayoutProps {
  fixedWidth?: boolean
  className?: string
}

const Layout: FC<LayoutProps> = ({
  children,
  fixedWidth = false,
  className = '',
}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <div className={cn(styles.baseContainer, className)}>
      <div className={cn({ [styles.fixedWidth]: fixedWidth })}>{children}</div>
    </div>
    <Footer />
  </ThemeProvider>
)

export default Layout
