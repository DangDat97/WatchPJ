Create Table Customer(
	CustomerId int primary key identity(1,1),
	Name nvarchar(50) not null,
	Cty nvarchar(50) not null,
	Country nvarchar(50) not null,
	Phone nvarchar(15) not null,
	Email nvarchar(50) not null,
);

Create Table CustomerAccount(
	AccountNumber char(9) primary key,
	CustomerId int foreign key references Customer(CustomerId),
	Balance money ,
	MinAccount money  not null
);


Create Table CustomerTransaction(
	TransactionId int primary key identity(1,1),
	AccountNumber char(9) foreign key references CustomerAccount(AccountNumber) not null,
	TransactionDate smalldatetime not null,
	Amount money not null,
	DespositorWithdraw bit not null
);

insert into Customer(Name,Cty,Country,Phone,Email)
values('Dat','Ha Noi','Cao Bang','0969992314','dangvandat09@gmail.com'),
('Hung','Ha Noi','Nam Dinh','088888888','nguyenhuhung@gmail.com'),
('Dung','Tp HCM','Thai Binh','096999999','nguyenhuudung@gmail.com'),
('Quang','Da Nang','Ha Noi','0999585888','trinhdinhquang@gmail.com');

select * from Customer;

insert into CustomerAccount(AccountNumber,CustomerId,Balance,MinAccount)
values('AZ1',1,500000,50),
('AZ2',2,100000,50),
('AZ3',3,1000000,50),
('AZ4',4,990000,50);

select * from CustomerAccount;

insert into CustomerTransaction(AccountNumber,TransactionDate,Amount,DespositorWithdraw)
values('AZ1','1999-12-1 12:43:10',100000,0),
('AZ2','1999-12-2 12:43:10',100000,0),
('AZ1','1999-12-3 12:43:10',100000,0),
('AZ3','1999-12-4 12:43:10',100000,0);

select * from CustomerAccount;



--4---
select * from Customer where Cty = 'Ha Noi';
--5---
select Customer.*,CustomerAccount.* from Customer left join CustomerAccount on CustomerAccount.CustomerId=Customer.CustomerId where Customer.name='Dat' ;
--6---
ALTER TABLE CustomerTransaction
ADD CHECK(Amount>0);
ALTER TABLE CustomerTransaction
ADD CHECK(Amount<=1000000);
--7---
Create view vCustomerTransactions as
select CustomerAccount.*,CustomerTransaction.* from CustomerAccount left join CustomerTransaction on CustomerAccount.AccountNumber=CustomerTransaction.AccountNumber;