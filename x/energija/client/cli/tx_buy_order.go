package cli

import (
	"strconv"

	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/kiprasdak/energija/x/energija/types"
)

var _ = strconv.Itoa(0)

func CmdBuyOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buy-order [amount-denom] [amount] [price-denom] [price]",
		Short: "Broadcast message buy-order",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmountDenom := args[0]
			argAmount, err := cast.ToInt32E(args[1])
			if err != nil {
				return err
			}
			argPriceDenom := args[2]
			argPrice, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBuyOrder(
				clientCtx.GetFromAddress().String(),
				argAmountDenom,
				argAmount,
				argPriceDenom,
				argPrice,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
