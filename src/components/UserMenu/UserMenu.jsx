import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import { useSelector } from "react-redux";
import { Wrapper, Text, Button } from "./UserMenu.styled";

export const UserMenu = () => {
	const { name } = useSelector(selectUser);
	const dispatch = useDispatch();
	return (
		<Wrapper>
			<Text>Welcome to Game {name} </Text>
			<Button
				type="button"
				onClick={() => dispatch(logOut())}
			>
				Logout
			</Button>
		</Wrapper>
	);
};
