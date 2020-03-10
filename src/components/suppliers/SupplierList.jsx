import React from 'react';

const SupplierList = () => {
	return (
		<div>
			<div className="searchnAdd">
				<div>
					<i class="fas fa-search" />
					<input type="text" />
				</div>
				<button className="addSupplierbtn">Add Supplier</button>
			</div>
			<div className="supplierList">
				<div>
					Hashra Investments<br />
					<button>Delete</button>
				</div>
				<div>
					Ganghli Industrial<br />
					<button>Delete</button>
				</div>
				<div>
					Industrial parts<br />
					<button>Delete</button>
				</div>
			</div>
		</div>
	);
};
export default SupplierList;
