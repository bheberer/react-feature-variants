import { useContext } from 'react';
import { VariantGroupContext } from '../components/VariantGroup';

export function useVariantGroup() {
	const { variantToRender, data } = useContext(VariantGroupContext);
	return { assignment: variantToRender, data };
}
