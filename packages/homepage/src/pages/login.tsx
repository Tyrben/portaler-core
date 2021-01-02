import React from 'react'

import Layout from '../components/Layout'
import Login from '../components/Login'
import SEO from '../components/seo'

import styles from './styles.module.scss'

const LoginPage = () => (
  <Layout fixedWidth>
    <SEO description="Login to your dashboard" />
    <Login />
  </Layout>
)

export default LoginPage
