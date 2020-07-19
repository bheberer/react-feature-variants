import React, { useContext } from 'react';
import { VariantGroupContext } from 'VariantGroup';

export function Variant({ id, children }) {
	const { variantToRender } = useContext(VariantGroupContext);

	return variantToRender === id ? children : null;
}
