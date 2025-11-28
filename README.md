Intro
Hello, everyone!
In this video, we’re going to build a fully-functional e-commerce website, just like Amazon, complete with an admin dashboard. We’ll use Next.js.

Home Page
Let’s start with the home page.

At the header, we have:

A brand  name.
A search box with a category filter.

Next, there’s a theme switcher where you can toggle between light and dark mode or change the theme color to gold, green, or red. Admins can add new colors too.
Then we have the account menu, where users can sign in or create an account.
And finally, the shopping cart icon.
Below the header, there’s a navigation menu. The first item, "All", opens a sidebar where you can browse by department, access your account, or visit the customer service page.

Scrolling further, we see sections for categories, cloth, belt, and featured products.

Further down, we see the Best Selling Products. If you hover over a product card for a second, the image changes.

At the bottom of the page, there are personalized sections like “Related to items you’ve viewed” and “Your browsing history,” similar to what you see on Amazon.

At the very end, there’s the website footer, which includes useful links, the site logo, and copyright information.

Search Page
Let’s search for a product by typing “cloth” and hitting Enter.


We can filter items by category, price range, rating, or tags.
Additionally, we can sort the results by price, newest arrivals, customer reviews, or best-selling.

Product Page
When you click on a product, the details page opens.

At the top, we have the product images, where you can select any image to preview.

On the right, there’s the product title, rating, and options to choose color and size. Clicking on the rating shows the distribution of reviews.

Scrolling down, customer reviews load automatically. On the left, you see the average rating and its breakdown, while the latest reviews are on the right. You can read reviews or write your own if you’ve purchased the product. Reviews are paginated, so you can load more if needed.

At the bottom, there’s a section for best-selling products in this category and your browsing history.

Let’s scroll up, select the quantity, and click Add to Cart. If you want to buy just this product, select “Buy Now” to go directly to the checkout page.

Add to Cart Page
After adding an item, you’ll be redirected to the add-to-cart page.

Here, the added item appears, and the shopping cart icon in the header updates with the number of items.

Cart Page
Let’s add another item to the cart and then go to the cart page.

Here, you can update the quantity or remove items. If your subtotal doesn’t meet the free shipping threshold, a notification will appear.

Checkout Page
Clicking “Proceed to Checkout” takes us to the sign-in page, unless the user is already logged in.

You can log in using your email and password or sign in with Google. Let’s create a new account.

After entering your information, you’ll be redirected to the checkout page.

The checkout process has three steps:

Add your address and select "Ship to this address."
Choose a payment method, such as PayPal, Stripe, or Cash on Delivery. Let’s go with PayPal.
Review your order, adjust quantities if needed, and select a shipping speed. Finally, place the order.
Checkout Payment Page
Once the order is placed, you’ll be redirected to PayPal to complete your payment. After confirming, you’ll return to the website to see the order details and receive a receipt via email.

Order Details Page
On the order details page, you can check the order status and see the items purchased.

To access this page, click on the account menu, select Your Orders, and choose the order you want to view.

From the account menu, you can also update your profile. For example, under signin & Security, you can edit your name and save changes. The updated name will reflect across the site.

Mobile Friendly
This e-commerce website is fully responsive and mobile-friendly. Let’s switch to the mobile view and create a new order. As you can see, all pages and elements are accessible and functional on mobile devices.


Manage Products
Let’s navigate to the "Products" section in the panel. Here, we have a list of all products. Let’s filter the products by the keyword “running” and edit one of them.
You can update the product information, upload images, or archive the product.

Manage Orders
Next, let’s go to the "Orders" section. Here, we have a list of all orders to manage. Let’s check the details of one order and mark it as delivered.

Manage Users
Now, let’s move to the "Users" section. On this page, you can manage users. For example, let’s edit a user and change their role to admin.

Manage Pages
This e-commerce website includes a small CMS where you can add new pages and content in Markdown format. In the "Pages" section, you’ll see a list of all pages. Let’s edit one, add some content in Markdown, and save it.

Manage Carousels
On this page, you can add, remove, or update carousel images displayed on the homepage.

Settings Page
The final admin section is the "Settings" page. Here, you can fill in your site information, including the brand name, logo, slogan, and other details about your e-commerce website.

Let’s get started and create our Next.js app in the next lesson!
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
