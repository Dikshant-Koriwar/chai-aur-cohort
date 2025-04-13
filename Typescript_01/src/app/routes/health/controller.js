"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthController {
    handleHeathCheck(req, res) {
        return res.json({
            status: 'healthy',
        });
    }
}
exports.default = HealthController;
