import React, { Component } from 'react'
import './Services.css'

export default class Services extends Component {
  render() {
    return (
      <section className="services">
        <h3 className="mb-4">Servicios</h3>
        <div className="services-center">
          
          <article className="service">
            <span><i className="fas fa-wifi"></i></span>
            <h5>Wi-Fi</h5>
            <p>
              Nam non porttitor ex. Donec commodo est non libero ullamcorper
              aliquet. Suspendisse sollicitudin accumsan ipsum, at varius felis
              dignissim molestie.
            </p>
          </article>

          <article className="service">
              <span><i className="fas fa-swimming-pool"></i></span>
              <h5>Piscina</h5>
              <p>
                Pellentesque blandit eu quam vel suscipit. Integer pulvinar in 
                mi quis imperdiet. Ut mattis justo nec augue tristique vehicula 
                ac in tellus.
              </p>
            </article>

            <article className="service">
              <span><i className="fas fa-tv"></i></span>
              <h5>TV</h5>
              <p>
                Aliquam a molestie purus. Ut neque augue, consequat vel tellus ac, 
                pulvinar pulvinar nisi. Integer dictum placerat quam. Etiam eget 
                neque massa.
              </p>
            </article>

        </div>
      </section>
    )
  }
}