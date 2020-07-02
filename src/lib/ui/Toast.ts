import { Toast } from ".";
import { ToastProps } from "@class101/ui";
export { Position, Colors } from "@class101/ui";

let AppToaster: Toast | undefined;

export async function showToast(props: ToastProps) {
	if (!AppToaster) {
		AppToaster = await Toast.create();
	}
	AppToaster.show(props);
}
