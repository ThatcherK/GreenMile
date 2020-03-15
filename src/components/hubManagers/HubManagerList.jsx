import React from 'react';
import Graph from '../Graph';

const HubManagerList = () => {
	return (
		<div>
			<div className="searchnAdd">
				<div>
					<i className="fas fa-search" />
					<input type="text" />
				</div>
				<button className="addSupplierbtn">Add Manager</button>
			</div>
			<div className="supplierList">
				<div className="pie">
					<h3>Kaliisa Thatcher</h3>
					<h4>Gulu city hub</h4>
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					<h3>Mutyaba Denis</h3>
					<h4>Seeta city hub</h4>
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					<h3>Afasha Isakiye</h3>
					<h4>Kampala city hub</h4>
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					<h3>Kiggundu Sheila</h3>
					<h4>Kireka city hub</h4>
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					<h3>Nambi Florence</h3>
					<h4>Ntinda city hub</h4>
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					<h3>Nankya Esther</h3>
					<h4>Mbarara city hub</h4>
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					<h3>Ochola Alfred</h3>
					<h4>Mukono city hub</h4>
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
			</div>
		</div>
	);
};
export default HubManagerList;
