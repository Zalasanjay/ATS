import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button,  Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MasterNav from './usermaster/MasterNav';
import PageTitle from '../../components/PageTitle';
import ClientTabs from './clientmaster/ClientNav';
import TeamTabs from './teammaster/TeamNav';
const Masters = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <React.Fragment>
      <Row className="page-title">
                <Col md={6}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Master', path: '/master', active: true },
                        ]}
                    />
                </Col>
                <Col md={6} className="text-right">
                <Button color="primary"><i className="uil uil-plus"></i>ADD ITEM</Button>
                </Col>
            </Row>
      <Nav tabs className="requirement-tab pt-3 pb-3 nav nav-tabs row bg-white">
        <NavItem className="col-sm-4">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            User Master
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-4">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Client Master
          </NavLink>
        </NavItem>
        <NavItem className="col-sm-4">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Team Master
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="req-tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
         
             <MasterNav/>
        </TabPane>
        <TabPane tabId="2">
         <ClientTabs/>
        </TabPane>
        <TabPane tabId="3">
         <TeamTabs/>
        </TabPane >
      </TabContent>
      
    </React.Fragment>
  );
}

export default Masters;