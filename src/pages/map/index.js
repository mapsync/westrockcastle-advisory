import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosync.cloud/maps/e3c33059-60a3-4d5b-a5bc-7601370fc604" + this.props.location.search;
  }

  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank" allow="geolocation"></iframe>
      </Layout>
    )
  }
}
