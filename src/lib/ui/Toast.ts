import { ToastProps } from "@class101/ui";
import { Toast } from ".";

let AppToaster: Toast | undefined;

export async function showToast(props: ToastProps) {
	if (!AppToaster) {
		AppToaster = await Toast.create();
	}
	AppToaster.show(props);
}
