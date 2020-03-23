import React,{useState} from 'react';
import Graph from '../Graph';
import UserForm from '../forms/UserForm'

const SupplierList = () => {
	const [view,setView] = useState(false)
	return (
		<div>
			<div className="searchnAdd">
				<div>
					<i className="fas fa-search" />
					<input type="text" />
				</div>
				<button className="addSupplierbtn" onClick={()=>setView(true)}>Add Supplier</button>
				{(view)?<UserForm setView={setView}/>:null}
			</div>
			<div className="supplierList">
				<div className="pie">
					Hashra Investments<br />
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					Ganghli Industrial<br />
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					Industrial parts<br />
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					Industrial parts<br />
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					Industrial parts<br />
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					Industrial parts<br />
					<Graph />
					<button className="signUpBtn">Contact Info</button>
					<br />
					<button>
						<i className="fas fa-trash-alt fa-2x" />
					</button>
				</div>
				<div>
					Industrial parts<br />
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
export default SupplierList;
