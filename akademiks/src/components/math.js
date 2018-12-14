import React, { Component } from 'react';
import Sidebar from './sidebar';
import { NavLink } from 'react-router-dom';
import './view.css';

class Math extends Component{
  constructor(props){
    super();
    this.state={
     
      data:[        ],
    }
    this.selectTopic=this.selectTopic.bind(this);
  }
  selectTopic(id){
    console.log(id)
    fetch(`/math/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ data: data[0].items[0] }));
    
  }
render()

{
  console.log(this.state.data)
    if (this.state.data){
      return(<div className='view'>
        <ul>
        <li><Sidebar selectTopic={this.selectTopic} name={"math"}/></li>
        <div className="html-body" dangerouslySetInnerHTML={{__html: this.state.data.content}} />
        
        </ul>
    </div>);}
    return (
      <div className="view">
         <h3> All you need to Know about Math</h3>
         <p> click on the <i class="fas fa-bars"></i> to find lessons or browse below to see Math Applications in society</p>
         <h4>Math in Politics</h4>
         <audio controls>
              <source src="https://bcp.crwdcntrl.net/5/c=10816/rand=843479272/pv=y/genp=slot%3Aundefined/genp=ad-unit-1%3Abbccom.live.site.news/genp=ad-unit-2%3A/genp=b_imp_src%3Agnl/genp=b_vs_un%3Abc/genp=ns_c%3AUTF-8/genp=b_daxcorp%3Abbc-global/genp=b_ad_enabled%3A1/genp=b_app_type%3Aweb/genp=app_type%3Aweb/genp=b_is_app%3A0/genp=b_c9%3A/genp=b_collection%3A/genp=b_edition%3Ana/genp=b_imp_ver%3A1.96.0/genp=b_s_vi%3A/genp=name%3Amore_or_less%3A_behind_the_stats_-_ws_more_or_less%3A_foreign_aid%3A_who%E2%80%99s_the_most_generous_-_bbc_sounds/genp=b_article_title%3Amore_or_less%3A_behind_the_stats_-_ws_more_or_less%3A_foreign_aid%3A_who%E2%80%99s_the_most_generous_-_bbc_sounds/genp=c2%3A19293874/genp=ns_site%3Abbc/genp=ns_ap_an%3Anull/genp=app_name%3Anull/genp=b_article_partner%3A/genp=b_article_license%3A/genp=b_app_name%3Asounds%7Cweb/genp=b_site_channel%3Asounds/genp=bbc_site%3Asounds/genp=prod_name%3Asounds/genp=b_site_section%3Asounds.play/genp=b_site_subsec1%3Asounds.play.p06pbppg/genp=b_site_subsec2%3A/genp=b_page_type%3Aidx%7Cna/int=%23OpR%2377493%23www.bbc.co.uk%20%3A%20Total%20Site%20Traffic/int=%23OpR%2377494%23www.bbc.co.uk%20%3A%20Site%20Section%20%3A%20sounds/int=%23OpR%2377495%23www.bbc.co.uk%20%3A%20Site%20Section%20%3A%20sounds%20%3A%20play/int=%23OpR%2377496%23www.bbc.co.uk%20%3A%20Site%20Section%20%3A%20sounds%20%3A%20play%20%3A%20p/med=%23OpR%2380848%23www.bbc.co.uk%20%3A%20Title%3A%20More%20or%20Less%3A%20Behind%20the%20Stats%20-%20WS%20More%20or%20Less%3A%20Foreign%20Aid%3A%20Who%E2%80%99s%20the%20most%20generous%3F%20-%20BBC%20Sounds/rt=ifr" />
              
            Your browser does not support the audio element.
           </audio>
      </div>
    )
}
}
export default Math;