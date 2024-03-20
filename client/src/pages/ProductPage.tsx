import React from 'react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../types/product';
import styles from './styles.module.scss';
import lifeJacket from '../assets/images/lifeJacket.svg';
import useLanguage from '../context/language/useLanguage';

const product: Product = {
	id: 1,
	title: 'Test product',
	price: '1000$',
	description: 'Description product',
	photo: lifeJacket,
	isLiked: true,
	isOnSale: true,
	isInShippingCart: true,
	count: 3
};

const ProductPage = () => {
	const { translate } = useLanguage();

	return (
		<div className={styles.productPage}>
			<ProductCard product={product} translate={translate} />
		</div>
	);
};

export default ProductPage;