CREATE TABLE "Customer" (
  "CID" BIGINT BIGSERIAL PRIMARY KEY,
  "Gender" VARCHAR(255),
  "Email" VARCHAR(255) UNIQUE NOT NULL,
  "Phone" VARCHAR(255) UNIQUE NOT NULL,
  "Password" VARCHAR(255) NOT NULL,
  "Username" VARCHAR(255) UNIQUE NOT NULL,
  "First_Name" VARCHAR(255) NOT NULL,
  "Middle_Name" VARCHAR(255),
  "Last_Name" VARCHAR(255) NOT NULL,
  "Reg_Date" TIMESTAMP NOT NULL DEFAULT (now()),
  "DOB" DATE,
  "Password_Salt" VARCHAR(20) NOT NULL,
  "is_seller" SMALLINT NOT NULL DEFAULT '0'
);

CREATE TABLE "Follow_Shop" (
  "CID" BIGSERIAL NOT NULL,
  "SID" BIGSERIAL NOT NULL,
  PRIMARY KEY ("CID", "SID")
);

CREATE TABLE "Like_Post" (
  "CID" BIGSERIAL NOT NULL,
  "POST_ID" BIGSERIAL NOT NULL,
  PRIMARY KEY ("CID", "POST_ID")
);

CREATE TABLE "Shop" (
  "SID" BIGINT PRIMARY KEY,
  "Seller_ID" BIGSERIAL NOT NULL,
  "Name" VARCHAR(255) NOT NULL,
  "Logo_URL" VARCHAR(255),
  "Banner_URL" VARCHAR(255),
  "Creation_Date" TIMESTAMP NOT NULL DEFAULT (now()),
  "Description" TEXT
);

CREATE TABLE "Product" (
  "PID" BIGSERIAL PRIMARY KEY NOT NULL,
  "SID" BIGSERIAL NOT NULL,
  "Name" VARCHAR(255) NOT NULL,
  "Price" NUMERIC(8,2) NOT NULL,
  "Description" TEXT,
  "AvailableQuantity" BIGINT NOT NULL DEFAULT '0',
  "ImageUrl" VARCHAR(255)
);

CREATE TABLE "Review" (
  "Review_ID" BIGSERIAL PRIMARY KEY,
  "Rating" SMALLINT NOT NULL,
  "Customer_ID" BIGINT NOT NULL,
  "ProductID" BIGINT NOT NULL,
  "Content" TEXT,
  "Creation_Date" TIMESTAMP NOT NULL DEFAULT (now()),
  "Update_Date" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "Competition" (
  "Competition_ID" BIGSERIAL PRIMARY KEY NOT NULL,
  "SID" BIGSERIAL NOT NULL,
  "Description" TEXT NOT NULL,
  "Title" VARCHAR(255) NOT NULL,
  "Status" VARCHAR(20) NOT NULL,
  "Discount" DECIMAL(2,2) NOT NULL,
  "Creation_Date" TIMESTAMP NOT NULL DEFAULT (now()),
  "Update_Date" TIMESTAMP NOT NULL DEFAULT (now())
  "End_Date" TIMESTAMP NOT NULL
);

CREATE TABLE "Product_Keywords" (
  "PID" BIGSERIAL NOT NULL,
  "keyword" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("PID", "keyword")
);

CREATE TABLE "Customer_Address" (
  "CID" BIGSERIAL NOT NULL,
  "AID" BIGSERIAL NOT NULL ,
  "Street" VARCHAR(255) NOT NULL,
  "City" VARCHAR (255) NOT NULL,
  "Country" VARCHAR(255) NOT NULL,
  "Address" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("CID", "AID")
);

CREATE TABLE "Notification" (
  "id" BIGSERIAL GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
  "Type" VARCHAR(255) NOT NULL,
  "URL" VARCHAR(255) NOT NULL,
  "Content" VARCHAR(255) NOT NULL
);

CREATE TABLE "Participte_Competition" (
  "CID" BIGINT NOT NULL,
  "Competition_ID" BIGINT NOT NULL,
  "Win" BOOL NOT NULL DEFAULT(FALSE),
  PRIMARY KEY ("CID", "Competition_ID")
);

CREATE TABLE "Post_Attachment" (
  "Post_ID" BIGSERIAL NULL,
  "Attachment" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("Post_ID", "Attachment")
);

CREATE TABLE "product_in_cart" (
  "Product_ID" BIGSERIAL,
  "Cart_ID" BIGSERIAL,
  "Quantity" INT NOT NULL,
    PRIMARY KEY ("Product_ID", "Cart_ID")
);

CREATE TABLE "product_category" (
  "Product_ID" BIGSERIAL  NOT NULL,
  "Category_ID" BIGSERIAL NOT NULL,
  PRIMARY KEY("Product_ID","Category_ID")
);

CREATE TABLE "Category" (
  "id" BIGSERIAL  PRIMARY KEY,
  "Name" VARCHAR(255) NOT NULL,
  "Parent_Category" BIGINT
);

CREATE TABLE "Order_Product" (
  "OrderID" BIGINT NOT NULL,
  "SID" BIGSERIAL NOT NULL,
  "Product_ID" BIGSERIAL NOT NULL,
  "Quantity" BIGINT NOT NULL,
  PRIMARY KEY("OrderID", "SID" ,"Product_ID")
);

CREATE TABLE "Promotion" (
  "id" BIGSERIAL PRIMARY KEY,
  "Discount" NUMERIC(8,2) NOT NULL,
  "Valid" BOOL NOT NULL DEFAULT(TRUE),
  "CID" BIGINT NOT NULL,
  "SID" BIGINT NOT NULL
);

CREATE TABLE "Cart" (
  "id" BIGSERIAL PRIMARY KEY,
  "Customer_ID" BIGSERIAL NOT NULL,
  "Created_At" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "Post" (
  "Post_ID" BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
  "SID" BIGINT NOT NULL,
  "Content" TEXT NOT NULL,
  "Created_At" TIMESTAMP NOT NULL DEFAULT (now()),
  "Updated_At" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "Order" (
  "Order_id" BIGSERIAL NOT NULL,
  "SID" BIGSERIAL NOT NULL,
  "Status" VARCHAR(50) NOT NULL,
  "CID" BIGSERIAL NOT NULL,
  "CreatedAt" TIMESTAMP NOT NULL DEFAULT (now()),
  "UpdatedAt" TIMESTAMP NOT NULL DEFAULT (now()),
  PRIMARY KEY ("Order_id", "SID")
);

CREATE TABLE "User_Notification" (
  "CID" BIGSERIAL NOT NULL,
  "NID" BIGSERIAL NOT NULL,
  "is_read" BOOL NOT NULL DEFAULT(FALSE),
  PRIMARY KEY ("CID", "NID")
);



ALTER TABLE "Order" ADD FOREIGN KEY ("SID") REFERENCES "Shop" ("SID");

ALTER TABLE "User_Notification" ADD FOREIGN KEY ("NID") REFERENCES "Notification" ("id");

ALTER TABLE "User_Notification" ADD FOREIGN KEY ("CID") REFERENCES "Customer" ("CID");

ALTER TABLE "Promotion" ADD FOREIGN KEY ("SID") REFERENCES "Shop" ("SID");

ALTER TABLE "Like_Post" ADD FOREIGN KEY ("CID") REFERENCES "Customer" ("CID");

ALTER TABLE "Like_Post" ADD FOREIGN KEY ("POST_ID") REFERENCES "Post" ("Post_ID");

ALTER TABLE "Order" ADD FOREIGN KEY ("CID") REFERENCES "Customer" ("CID");

ALTER TABLE "Review" ADD FOREIGN KEY ("Customer_ID") REFERENCES "Customer" ("CID");

ALTER TABLE "product_category" ADD FOREIGN KEY ("Category_ID") REFERENCES "Category" ("id");

ALTER TABLE "product_in_cart" ADD FOREIGN KEY ("Product_ID") REFERENCES "Product" ("PID");

ALTER TABLE "Category" ADD FOREIGN KEY ("Parent_Category") REFERENCES "Category" ("id");

ALTER TABLE "Order_Product" ADD FOREIGN KEY ("OrderID" , "SID") REFERENCES "Order" ("Order_id" , "SID");

ALTER TABLE "Promotion" ADD FOREIGN KEY ("CID") REFERENCES "Customer" ("CID");

ALTER TABLE "Cart" ADD FOREIGN KEY ("Customer_ID") REFERENCES "Customer" ("CID");

ALTER TABLE "product_in_cart" ADD FOREIGN KEY ("Cart_ID") REFERENCES "Cart" ("id");

ALTER TABLE "product_category" ADD FOREIGN KEY ("Product_ID") REFERENCES "Product" ("PID");

ALTER TABLE "Order_Product" ADD FOREIGN KEY ("Product_ID") REFERENCES "Product" ("PID");

ALTER TABLE "Review" ADD FOREIGN KEY ("ProductID") REFERENCES "Product" ("PID");

ALTER TABLE "Follow_Shop" ADD FOREIGN KEY ("CID") REFERENCES "Customer" ("CID");

ALTER TABLE "Participte_Competition" ADD FOREIGN KEY ("CID") REFERENCES "Customer" ("CID");

ALTER TABLE "Customer_Address" ADD FOREIGN KEY ("CID") REFERENCES "Customer" ("CID");

ALTER TABLE "Competition" ADD FOREIGN KEY ("SID") REFERENCES "Shop" ("SID");

ALTER TABLE "Follow_Shop" ADD FOREIGN KEY ("SID") REFERENCES "Shop" ("SID");

ALTER TABLE "Shop" ADD FOREIGN KEY ("Seller_ID") REFERENCES "Customer" ("CID");

ALTER TABLE "Product_Keywords" ADD FOREIGN KEY ("PID") REFERENCES "Product" ("PID");

ALTER TABLE "Participte_Competition" ADD FOREIGN KEY ("Competition_ID") REFERENCES "Competition" ("Competition_ID");

ALTER TABLE "Post_Attachment" ADD FOREIGN KEY ("Post_ID") REFERENCES "Post" ("Post_ID");

ALTER TABLE "Post" ADD FOREIGN KEY ("SID") REFERENCES "Shop" ("SID");

ALTER TABLE "Product" ADD FOREIGN KEY ("SID") REFERENCES "Shop" ("SID");