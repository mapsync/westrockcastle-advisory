import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ content, contentComponent, name, address, mailing_address, city_state_zip, phone, fax, facebook }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <div className="container container-main grid-md">
        <div className="card">
          <div className="card-header">
            Address
          </div>
          <div className="card-body">
            {name}<br />
            {address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Mailing Address
          </div>
          <div className="card-body">
            {name}<br />
            {mailing_address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Phone
          </div>
          <div className="card-body">
            T: <a href={"tel:1-" + phone}>{phone}</a><br />
            F: <a href={"tel:1-" + fax}>{fax}</a><br />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            After Hours Phone
          </div>
          <div className="card-body">
            Brandon Bishop: <a href="tel:1-606-308-9555">606-308-9555</a><br />
            Charles DeBorde: <a href="tel:1-606-308-2416">606-308-2416</a><br />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Facebook
          </div>
          <div className="card-body">
            {facebook}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Information
          </div>
          <div className="card-body">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="d-inline-block float-right">
          <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://westernrockcastlewater.geosync.cloud/admin" target="_blank">
            <Icon.Settings size={16}/>
          </a>
        </div>
      </div>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        name={frontmatter.name}
        address={frontmatter.address}
        mailing_address={frontmatter.mailing_address}
        city_state_zip={frontmatter.city_state_zip}
        phone={frontmatter.phone}
        fax={frontmatter.fax}
        facebook={frontmatter.facebook}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name,
        address,
        mailing_address,
        city_state_zip,
        phone,
        fax,
        facebook
      }
    }
  }
`
