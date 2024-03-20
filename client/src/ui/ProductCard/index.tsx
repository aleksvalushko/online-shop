import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Product } from '../../types/product';
import { FilledHeartIcon, OutlinedHeartIcon } from '../../assets/icons/Icons';
import { Card } from 'antd';

type Props = {
	product: Product;
	translate: ((path: string) => string) | undefined;
};

const ProductCard = ({ product, translate }: Props) => {
	const { price, title, photo, isLiked, count, isOnSale } = product;
	const [isLikeButtonHovered, setIsLikeButtonHovered] = useState<boolean>(isLiked);

	return (
		<Card className={styles.productCard} hoverable>
			<div className={styles.header}>
				{isOnSale ? <div className={styles.saleButton}>{translate && translate('product.sale')}</div> : ''}
				<div className={styles.likeButton} onClick={() => setIsLikeButtonHovered(!isLikeButtonHovered)}>
					{isLikeButtonHovered ? <FilledHeartIcon /> : <OutlinedHeartIcon />}
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.image}>
					<img src={photo} alt='logo' />
				</div>
				<div className={styles.title}>{title}</div>
				{count ? (
					<div className={styles.price}>{price}</div>
				) : (
					<div className={styles.noSuchProduct}>{translate && translate('product.noSuchProduct')}</div>
				)}
			</div>
			{count ? '' : <div className={styles.notifyEnrollment}>{translate && translate('product.notifyEnrollment')}</div>}
		</Card>
	);
};

export default ProductCard;
