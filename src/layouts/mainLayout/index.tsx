import * as React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import TopBar from './topBar';
//import Foot from 'components/footer';
import { withRouter } from 'react-router';
import ErrorBoundary from '@/components/errorBoundary';
import './style.scss';

interface IProps {
	getNavData: (params: any) => void;
	location: any;
	children: any;
	navData: any;
	isTopHide:any;
}
interface IState {
	loading: boolean;
}

const mapState = (state) => {
  console.log("state", state)
  return {
    navData: state.global.navData
  };
};

const mapDispatch = ({ global: {  getNavData }}) => {
  return {
    getNavData ,
  };
};

class MainLayout extends React.Component<IProps, IState> {
	constructor(IProps: any) {
		super(IProps);
	}
	state: IState = {
		loading: false,
	};
	componentDidMount() {
		console.log(2);
		this.props.getNavData({});
	}

	render() {
		const { location, children, navData,isTopHide } = this.props;
		return (
			<Layout>
				<ErrorBoundary>
				   {isTopHide&&<TopBar location={location} navData={navData} />}
					<div style={{top:isTopHide?"64px":"0px"}} className="main-layout">{children}</div>
					{/* <Foot /> */}
				</ErrorBoundary>
			</Layout>
		);
	}
}
export default connect(mapState, mapDispatch)(withRouter(MainLayout))

