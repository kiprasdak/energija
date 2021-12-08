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

func CmdTokenizeEnergy() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "tokenize-energy [amount]",
		Short: "Broadcast message tokenize-energy",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount, err := cast.ToInt32E(args[0])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgTokenizeEnergy(
				clientCtx.GetFromAddress().String(),
				argAmount,
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
